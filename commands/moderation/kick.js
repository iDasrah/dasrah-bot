const { MessageEmbed } = require('discord.js');
const { MESSAGES, CHANNELS } = require('../../utils/consts');

module.exports.run = (client, message, args) => {
	message.delete();
	const reason = args.splice(1).join(' ') || 'Raison non spécifiée.';
	const taggedUser = message.mentions.members.first();
	embed = new MessageEmbed()
		.setTitle('MEMBRE EXPULSÉ')
		.setDescription('Un camarade a été expulsé...')
		.addField('Membre', taggedUser, true)
		.addField('Raison', reason)
		.setTimestamp();

	taggedMember.kick(reason);

	return client.channels.cache.get(CHANNELS.QUITCHANNEL).send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.KICK;
