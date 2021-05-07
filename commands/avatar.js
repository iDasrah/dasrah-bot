const Discord = require('discord.js');
const descs = require('./avatar.json');

module.exports = {
  name: 'avatar',
  description: 'avatar {user} retourne l\'avatar de l\'utilisateur.',
  execute(message, args) {

    const embed = new Discord.MessageEmbed()
    .setColor('#69D8C9')
    .setDescription(descs.messages[random(0, descs.messages.length)])
    .setTimestamp();

    if(!args.length) {
      embed.setTitle(`AVATAR DE ${message.author.username.toUpperCase()}`)
      embed.setImage(message.author.displayAvatarURL());
      message.reply(embed);
    } else if(args.length) {
	    const taggedUser = message.mentions.users.first();
      embed.setTitle(`AVATAR DE ${taggedUser.username.toUpperCase()}`);
      embed.setImage(taggedUser.displayAvatarURL());
	    message.reply(embed);
    }
  }
};

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}