const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require('../../utils/consts');

module.exports.run = (client, message, args) => {
	message.delete();
	const reason = args.splice(1).join(' ') || 'Raison non spécifiée.';
	const taggedUser = message.mentions.users.first();
	embed = new MessageEmbed()
		.setTitle('MEMBRE EXPULSÉ')
		.setDescription('Un camarade a été expulsé...')
		.addField('Membre', taggedUser, true)
		.addField('Raison', reason)
		.setTimestamp();

	if (!taggedUser) return message.reply(client.config.bot_messages['no-user-tagged']);
	taggedUser
		? message.guild.member(taggedUser).kick(reason)
		: message.reply(client.config.bot_messages['user-not-found']);

	return client.channels.cache.get('846288755480592435').send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.KICK;
