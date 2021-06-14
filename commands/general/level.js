const { MESSAGES } = require('../../utils/consts');
const { loadXPBar } = require('../../utils/functions');

module.exports.run = async (client, message, args) => {
	let member;
	let memberInfo;
	if (!args.length) {
		member = message.author;
		memberInfo = await client.getUser(member);
	} else {
		member = message.mentions.users.first();
		memberInfo = await client.getUser(member);
	}

	const memberXP = memberInfo.experience;
	const memberLevel = memberInfo.level;
	const attachment = await loadXPBar(member, memberXP, memberLevel);
	message.channel.send(attachment);
};

module.exports.help = MESSAGES.COMMANDS.GENERAL.LEVEL;
