const { MESSAGES } = require('../../utils/consts');

module.exports.run = async (client, message, args) => {
	message.delete();
	const taggedMember = message.mentions.members.first();

	await client.updateUser(taggedMember);

	message.channel.send(
		`${taggedMember}, vous avez été averti par ${message.author} ! Faites attention la prochaine fois.`
	);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.AVERT;
