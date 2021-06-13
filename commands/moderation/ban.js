const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require('../../utils/consts');

module.exports.run = (client, message, args) => {
	message.delete();

	const reason = args.splice(1).join(' ') || 'Raison non spécifiée.';
	const taggedUser = message.mentions.users.first();
	embed = new MessageEmbed()
		.setTitle('MEMBRE BANNI')
		.setDescription('Un camarade a été banni...')
		.addField('Membre', taggedUser, true)
		.addField('Raison', reason)
		.setTimestamp();

	if (!taggedUser) return message.reply(client.config.bot_messages['no_user_tagged']);
	taggedUser
		? message.guild.member(taggedUser).ban({ reason: reason })
		: message.reply(client.config.bot_messages['user_not_found']);

	return client.channels.cache.get('846288755480592435').send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.BAN;
