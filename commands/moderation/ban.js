const { MessageEmbed } = require('discord.js');
const { MESSAGES, CHANNELS } = require('../../utils/consts');

module.exports.run = (client, message, args) => {
	message.delete();

	const reason = args.splice(1).join(' ') || 'Raison non spécifiée.';
	const taggedMember = message.mentions.members.first();
	embed = new MessageEmbed()
		.setTitle('MEMBRE BANNI')
		.setDescription('Un camarade a été banni...')
		.addField('Membre', taggedUser, true)
		.addField('Raison', reason)
		.setTimestamp();

	taggedMember.ban({ reason: reason });

	return client.channels.cache.get(CHANNELS.QUITCHANNEL).send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.BAN;
