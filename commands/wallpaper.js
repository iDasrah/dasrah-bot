const { mobile, desktop, descriptions } = require('./wallpapers.json');
const { MessageEmbed } = require('discord.js');
const { messages } = require('../config.json');

module.exports = {
  name: "wallpaper",
  description: "random wallpaper",
  execute(message, args) {

    if(!args.length) return message.reply(messages['no-argument-error']);

    if(args.length === 1) {

      if(args[0] === 'mobile') {
        sendWallpaper(message, mobile);
      } else if(args[0] === 'desktop') {
        sendWallpaper(message, desktop);
      } else return message.reply(messages['wrong-argument-error']);
    }

    if(args[1]) {
      sendWallpaperByType(message, args[0], getFromType(args[0], args[1]));
    }
  }
}

function random(min, max) {

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getFromType(device, type) {

  device = (device === 'desktop') ? desktop : mobile;
  urls = [];

  device.forEach((wallpaper) => {
    if(wallpaper.type === type) {
      urls.push(wallpaper.url);
    }
  });

  return urls; 
}

function sendWallpaper(message, device) {

  const embed = new MessageEmbed()
  .setColor("#F7B2EE")
  .setDescription(descriptions[random(0, descriptions.length)])
  .setTimestamp();
  image = device[random(1, device.length)].url;

  device = (device === desktop) ? 'desktop' : 'mobile';

  if(device.length <= 1) return message.reply(messages['no-urls-wallpaper']);

  embed.setTitle(`${device.toUpperCase()} WALLPAPER GENERATOR`)
  .setImage(image)
  message.channel.send(embed);
}

function sendWallpaperByType(message, device, urls) {

  const embed = new MessageEmbed()
  .setColor("#F7B2EE")
  .setDescription(descriptions[random(0, descriptions.length)])
  .setTimestamp();
  image = urls[random(0, urls.length)];

  if(urls.length < 1) return message.reply(messages['no-urls-wallpaper']);

  embed.setTitle(`${device.toUpperCase()} WALLPAPER GENERATOR`)
  .setImage(image);
  message.channel.send(embed);
}