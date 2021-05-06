const { mobileWallpapers, pcWallpapers } = require('./wallpapers.json');
const { MessageEmbed } = require('discord.js');
const { random } = require('../module');

module.exports = {
  name: "wallpaper",
  description: "random wallpaper",
  execute(message, args) {
    const embed = new MessageEmbed()
    .setColor();

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