const { random, loadLoveTest } = require('../../utils/functions');
const { MESSAGES } = require('../../utils/consts');

module.exports.run = async (client, message, args) => {
	const taggedUser = message.mentions.users.first();
	const love = random(0, 101);

	const attachment = await loadLoveTest(message.author, taggedUser, love);
	message.channel.send(attachment);

	if (love < 20)
		return message.channel.send("Je crois que vous n'êtes pas faits pour être ensembles.");
	else if (love >= 20 && love < 50)
		return message.channel.send("Ca a l'air d'aller. Mais c'est pas trop ça.");
	else if (love >= 50 && love < 70)
		return message.channel.send('Ca durera peut-être quelques mois ?');
	else if (love >= 70 && love < 90)
		return message.channel.send('Bon, vous formerez un bon couple.');
	else if (love >= 90) return message.channel.send('Tu as trouvé ton âme soeur, je crois.');
};

module.exports.help = MESSAGES.COMMANDS.FUN.LOVETEST;
