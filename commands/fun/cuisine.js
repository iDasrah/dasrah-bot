const { bot_messages } = require('../../json/config.json');
const { MESSAGES } = require('../../utils/consts');

module.exports.run = (client, message, args) => {
	const taggedMember = message.mentions.members.first();

	if (!taggedMember) return message.reply(bot_messages['no-user-tagged']);
	if (!taggedMember.roles.cache.find((role) => role.name === 'Femme'))
		return message.reply(`${taggedMember} n'est pas une femme.`);

	message.channel.send(`Retourne à la cuisine, femme !!! ${taggedMember}`);
};

module.exports.help = MESSAGES.COMMANDS.FUN.CUISINE;
