const { MessageEmbed } = require('discord.js');
const { messages } = require('../../json/avatar.json');
const { bot_messages } = require('../../json/config.json');
const { random } = require('../../exports');

module.exports.run = (client, message, args) => {
	const embed = new MessageEmbed()
		.setColor('#69D8C9')
		.setDescription(messages[random(0, messages.length)])
		.setTimestamp();

	if (!args.length) {
		embed.setTitle(`AVATAR DE ${message.author.username.toUpperCase()}`);
		embed.setImage(message.author.displayAvatarURL({ dynamic: true, size: 4096 }));
		message.reply(embed);
	} else {
		const taggedUser = message.mentions.users.first();
		if (!taggedUser) return message.reply(bot_messages['no-user-tagged']);
		embed.setTitle(`AVATAR DE ${taggedUser.username.toUpperCase()}`);
		embed.setImage(taggedUser.displayAvatarURL({ dynamic: true, size: 4096 }));
		message.reply(embed);
	}
};

module.exports.help = {
	name: 'avatar',
	description: "Envoie l'avatar de l'utilisateur",
	args: [false, [1, '']],
	usage: '[utilisateur]',
	category: 'misc',
	aliases: ['pp', 'a'],
};
