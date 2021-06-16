const { MESSAGES } = require('../../utils/consts');
const fetch = require('node-fetch');
const translate = require('@iamtraction/google-translate');

module.exports.run = async (client, message, args) => {
	const res = await fetch('http://numbersapi.com/random/math');
	const data = await res.text();
	const fact = await translate(data, { to: 'fr' });
	message.channel.send(fact.text);
};

module.exports.help = MESSAGES.COMMANDS.MISC.NBRFACT;
