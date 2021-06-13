const { MESSAGES } = require('../../utils/consts');

module.exports.run = async (client, message, args) => {
	message.delete();
	const nbrMsg = args[0];

	if (nbrMsg) {
		if (isNaN(nbrMsg)) return message.reply(client.config.bot_messages['NaN_arg_error']);
		else if (nbrMsg > 100) return message.reply(client.config.bot_messages['too_much_clear_error']);
		else if (nbrMsg < 1) return message.reply(client.config.bot_messages['not_enough_clear_error']);
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
