const { MESSAGES } = require('../../utils/consts');

module.exports.run = (client, message, args) => {
	message.delete();
	const taggedUser = message.mentions.users.first();
	message.channel.send(
		`${taggedUser}, vous avez été averti par ${message.author} ! Faites attention la prochaine fois.`
	);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.AVERT;
