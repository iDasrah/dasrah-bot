const {MessageEmbed} = require('discord.js');
const {messages} = require('./json_files/avatar.json');

module.exports = {
  name: 'avatar',
  description: 'Retourne l\'avatar d\'un utilisateur.',
  execute(client, message, args) {

    const embed = new MessageEmbed()
    .setColor('#69D8C9')
    .setDescription(messages[random(0, messages.length)])
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