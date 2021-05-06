const { memes } = require('./shrek.json');
const Discord = require('discord.js');
const { random } = require('../module');

module.exports = {
  name: "shrek",
  description: "answers with a random shrek meme.",
  args: false,
  execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor('#C4E538')
    .setTitle('SHREK MEME GENERATOR')
    .setImage(memes[random(0, memes.length)].url);
    message.channel.send(embed);
  }
}