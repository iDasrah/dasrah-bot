const { MessageEmbed } = require('discord.js');
const { random } = require('../../exports');

module.exports.run = (client, message, args) => {
	const taggedUser = message.mentions.users.first();
	if (!taggedUser) return message.reply(bot_messages['no-user-tagged']);
	const love = random(0, 101);
	const embed = new MessageEmbed()
		.setTitle('LOVE TEST')
		.setColor('#F4B3F4')
		.setTimestamp()
		.setDescription('Est-ce votre âme-soeur ?')
		.addFields(
			{ name: 'Membre', value: message.author.username, inline: true },
			{ name: '+', value: ':heart:', inline: true },
			{ name: 'Membre', value: taggedUser.username, inline: true },
			{ name: 'POURCENTAGE', value: `${love}%` }
		);

	if (love < 20) embed.setFooter("Je crois que vous n'êtes pas faits pour être ensembles.");
	else if (love >= 20 && love < 50) embed.setFooter("Ca a l'air d'aller. Mais c'est pas trop ça.");
	else if (love >= 50 && love < 70) embed.setFooter('Ca durera peut-être quelques mois ?');
	else if (love >= 70 && love < 90) embed.setFooter('Bon, vous formerez un bon couple.');
	else if (love >= 90) embed.setFooter('Tu as trouvé ton âme soeur, je crois.');

	return message.channel.send(embed);
};

module.exports.help = {
	name: 'lovetest',
	description: "Découvrez quel pourcentage d'amour vous avez avec un autre membre",
	args: [true, [1, 'strict']],
	usage: '<membre>',
	category: 'fun',
	aliases: ['lv', 'lt', 'love'],
};
