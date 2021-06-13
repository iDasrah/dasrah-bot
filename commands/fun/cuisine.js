const { MESSAGES } = require('../../utils/consts');

module.exports.run = (client, message, args) => {
	const taggedMember = message.mentions.members.first();

	if (!taggedMember.roles.cache.find((role) => role.name === 'Femme'))
		return message.reply(`${taggedMember} n'est pas une femme.`);

	message.channel.send(`Retourne à la cuisine, femme !!! ${taggedMember}`);
};

module.exports.help = MESSAGES.COMMANDS.FUN.CUISINE;
