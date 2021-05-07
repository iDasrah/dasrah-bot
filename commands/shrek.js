const { memes } = require('./shrek.json');
const Discord = require('discord.js');

module.exports = {
  name: "shrek",
  description: "answers with a random shrek meme.",
  args: false,
  execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor('#41B64C')
    .setTitle('SHREK MEME GENERATOR')
    .setTimestamp()
    .setImage(memes[random(0, memes.length)].url);
    message.channel.send(embed);
  }
}

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}