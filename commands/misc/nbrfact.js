const { MESSAGES } = require('../../utils/consts');
const fetch = require('node-fetch');
const translate = require('@iamtraction/google-translate');

module.exports.run = async (client, message, args) => {
	const res = await fetch('http://numbersapi.com/random/math');
	if (res.ok) {
		const data = await res.text();
		const fact = await translate(data, { to: 'fr' });
		message.channel.send(fact.text);
	} else message.reply(`une erreur est survenue. Code: ${res.status}`);
};

module.exports.help = MESSAGES.COMMANDS.MISC.NBRFACT;
