const { MESSAGES } = require('../../utils/consts');

module.exports.run = async (client, message, args) => {
	const taggedMember = message.mentions.members.first();
	const dataMember = await client.getUser(taggedMember);

	await client.updateUser(taggedMember, { warns: dataMember.warns + 1 });

	message.channel.send(
		`${taggedMember}, vous avez été averti par ${message.author} ! C'est votre ${
			dataMember.warns + 1
		}ème avertissement.`
	);

	if (dataMember.warns + 1 > 3) {
		taggedMember.ban({ days: 7, reason: "Trop d'avertissements" });
	}
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.AVERT;
