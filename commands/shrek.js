const { memes } = require('./json_files/shrek.json');
const {MessageEmbed} = require('discord.js');

module.exports = {
  name: "shrek",
  description: "Meme Shrek aléatoire",
  execute(client, message, args) {
    const embed = new MessageEmbed()
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