const { memes } = require('../../json/shrek.json');
const { MessageEmbed } = require('discord.js');

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports.run = (client, message, args) => {
    const embed = new MessageEmbed()
    .setColor('#41B64C')
    .setTitle('SHREK MEME GENERATOR')
    .setTimestamp()
    .setImage(memes[random(0, memes.length)].url);
    message.channel.send(embed);
};

module.exports.help = {
  name: 'shrek',
  description: 'Génère un meme aléatoire de shrek',
  args: [false, [0, '']],
  category: 'memes',
  usage: '',
  aliases: []
};