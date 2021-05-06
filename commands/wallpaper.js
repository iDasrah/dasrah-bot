const { mobileWallpapers, pcWallpapers } = require('./wallpapers.json');
const { MessageEmbed } = require('discord.js');
const { random } = require('../module');
const { messages } = require('../config.json');

module.exports = {
  name: "wallpaper",
  description: "random wallpaper",
  execute(message, args) {

    if(!args.length) return message.reply(messages['no-argument-error']);

    const embed = new MessageEmbed();

    if(args[0] === 'mobile') {
      embed.setTitle("MOBILE WALLPAPER GENERATOR")
      .setImage(mobileWallpapers[random(0, mobileWallpapers.length)].url);
      message.channel.send(embed);
    }

    if(args[0] === 'pc') {
      embed.setTitle("PC WALLPAPER GENERATOR")
      .setImage(pcWallpapers[random(0, pcWallpapers.length)].url);
      message.channel.send(embed);
    }
  }
}