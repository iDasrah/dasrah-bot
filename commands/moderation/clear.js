const { MESSAGES } = require('../../utils/consts');

module.exports.run = async (client, message, args) => {
	message.delete();
	const nbrMsg = args[0];

	if (nbrMsg) {
		if (isNaN(nbrMsg)) {
			const embed = new MessageEmbed()
				.setTitle('ERROR: NaN_ARG_ERROR')
				.setColor('#A80506')
				.setDescription(client.config.bot_messages['NaN_arg_error'])
				.addField('Usage', `${settings.prefix}${command.help.name} ${command.help.usage}`);
			return message.reply(embed);
		} else if (nbrMsg > 100) {
			const embed = new MessageEmbed()
				.setTitle('ERROR: TOO_MUCH_CLEAR_ERROR')
				.setColor('#A80506')
				.setDescription(client.config.bot_messages['too_much_clear_error'])
				.addField('Usage', `${settings.prefix}${command.help.name} ${command.help.usage}`);
			return message.reply(embed);
		} else if (nbrMsg < 1) {
			const embed = new MessageEmbed()
				.setTitle('ERROR: NOT_ENOUGH_CLEAR_ERROR')
				.setColor('#A80506')
				.setDescription(client.config.bot_messages['not_enough_clear_error'])
				.addField('Usage', `${settings.prefix}${command.help.name} ${command.help.usage}`);
			return message.reply(embed);
		}
	}

	if (!args.length) {
		await message.channel.messages.fetch({ limit: 100 }).then((messages) => {
			message.channel.bulkDelete(messages);
		});
	} else {
		await message.channel.messages.fetch({ limit: nbrMsg }).then((messages) => {
			message.channel.bulkDelete(messages);
		});
	}
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.CLEAR;
