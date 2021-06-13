const { MessageEmbed, MessageAttachment } = require('discord.js');
const dice = new MessageAttachment('./assets/img/dice.png');
const { MESSAGES } = require('../../utils/consts');
const number = () => Math.floor(Math.random() * 6 + 1);

module.exports.run = (client, message, args, settings) => {
	const action = args[0];

	const embed = new MessageEmbed()
		.setColor('#E72021')
		.setTimestamp()
		.attachFiles(dice)
		.setThumbnail('attachment://dice.png')
		.setDescription('Un combat de dés vient de commencer...');

	if (!args.length) {
		const number1 = number();
		const number2 = number();
		embed
			.setTitle(`${message.author.username} VS ${client.user.username}`)
			.addFields(
				{ name: message.author.username, value: number1, inline: true },
				{ name: client.user.username, value: number2, inline: true }
			);

		if (number1 > number2) embed.setFooter(`VICTOIRE DE ${message.author.username}`);
		else if (number1 === number2) embed.setFooter(`EGALITE`);
		else embed.setFooter(`VICTOIRE DE ${client.user.username}`);
	} else if (action === 'duel') {
		const taggedUser = message.mentions.users.first();
		const number1 = number();
		const number2 = number();
		embed
			.setTitle(`${message.author.username} VS ${taggedUser.username}`)
			.addFields(
				{ name: message.author.username, value: number1, inline: true },
				{ name: taggedUser.username, value: number2, inline: true }
			);
		if (number1 > number2) embed.setFooter(`VICTOIRE DE ${message.author.username}`);
		else if (number1 === number2) embed.setFooter(`EGALITE`);
		else embed.setFooter(`VICTOIRE DE ${taggedUser.username}`);
	} else {
		const embed = new MessageEmbed()
			.setTitle('ERROR: WRONG_ARGUMENT_ERROR')
			.setColor('#A80506')
			.setDescription(client.config.bot_messages['wrong_argument_error'])
			.addField('Usage', `${settings.prefix}${command.help.name} ${command.help.usage}`);
		return message.reply(embed);
	}
	message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.GAMES.DICE;
