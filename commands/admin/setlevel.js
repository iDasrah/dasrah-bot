const { MESSAGES } = require('../../utils/consts');

module.exports.run = async (client, message, args) => {
	const taggedMember = message.mentions.members.first();
	const memberInfo = await client.getUser(taggedMember);
	const memberLevel = memberInfo.level;
	const newLevel = args[1];

	client.updateUser(taggedMember, { level: newLevel, experience: 0 });

	message.channel.send(
		`Vous avez changé le niveau de ${taggedMember}: ${memberLevel} -> ${newLevel}.`
	);
};

module.exports.help = MESSAGES.COMMANDS.ADMIN.SETLEVEL;
