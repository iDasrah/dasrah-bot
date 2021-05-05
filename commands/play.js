const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const config = require('../config.json');
const Discord = require('discord.js')

module.exports = {
  name: 'play',
  description: 'jouer une vidéo youtube',
  async execute(message, args) {
    const voiceChannel = message.member.voice.channel;

    if(!voiceChannel) return message.reply(config.messages['not-in-a-voice-channel-error']);
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if(!permissions.has('CONNECT')) return message.reply(config.messages['no-permission-error']);
    if(!permissions.has('SPEAK')) return message.reply(config.messages['no-permission-error']);
    if(!args.length) return message.reply(config.messages['no-argument-error']);

    const connection = await voiceChannel.join();
    const videoFinder = async (query) => {
      const videoResult = await ytSearch(query);
      return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
    }

    const video = await videoFinder(args.join(' '));

    if(video) {
      const stream = ytdl(video.url, {filter: 'audioonly'});
      connection.play(stream, {seek: 0, volume: 1})
      .on('finish', () => {
        voiceChannel.leave();
      });

      const embed = new Discord.MessageEmbed()
      .setTitle("MUSIC PLAYER")
      .setDescription(`NOW PLAYING A VIDEO`)
      .setField("TITLE", `${video.title}`, true);

      await message.reply(embed)
    } else {
      message.reply(config.messages['video-not-found']);
    }
  }
}