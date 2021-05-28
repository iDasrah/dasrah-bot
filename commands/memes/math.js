const { math } = require('../../json/memes.json');
const { MessageEmbed } = require('discord.js');

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports.run = (client, message, args) => {
  const embed = new MessageEmbed()
    .setColor('#FE2EE4')
    .setTitle('MATH MEME GENERATOR')
    .setTimestamp()
    .setImage(math[random(0, math.length)].url);
    message.channel.send(embed);
}

module.exports.help = {
  name: 'math',
  description: 'Génère un meme de maths aléatoire',
  args: [false, [0, '']],
  category: 'memes',
  usage: '',
  aliases: ['maths']
}