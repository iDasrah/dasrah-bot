const { MessageEmbed } = require('discord.js');
const { bot_messages } = require('../../json/config.json');

module.exports.run = (client, message, args) => {
	const reason = args.splice(1).join(' ') || 'Raison non spécifiée.';
	const taggedUser = message.mentions.users.first();
	embed = new MessageEmbed()
		.setTitle('MEMBRE EXPULSÉ')
		.setDescription('Un camarade a été expulsé...')
		.addField('Membre', taggedUser, true)
		.addField('Raison', reason)
		.setTimestamp();

	if (!taggedUser) return message.reply(bot_messages['no-user-tagged']);
	taggedUser
		? message.guild.member(taggedUser).kick(reason)
		: message.reply(bot_messages['user-not-found']);

	return client.channels.cache.get('846288755480592435').send(embed);
};

module.exports.help = {
	name: 'kick',
	description: 'Expulse un membre',
	args: [true, [100, '']],
	usage: '<membre> [raison]',
	category: 'moderation',
	aliases: ['k'],
	permission: 'KICK_MEMBERS',
};
