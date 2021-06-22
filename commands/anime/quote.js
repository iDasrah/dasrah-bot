const { MESSAGES } = require('../../utils/consts');
const fetch = require('node-fetch');
const translate = require('@iamtraction/google-translate');

module.exports.run = async (client, message, args) => {
	const res = await fetch('https://animechan.vercel.app/api/random');
	if (res.ok) {
		const data = await res.json();
		const quote = await translate(data.quote, { to: 'fr' });
		message.channel.send(`${quote.text}\r\n~${data.character}, ${data.anime}`);
	} else message.reply(`une erreur est survenue. Code: ${res.status}`);
};

module.exports.help = MESSAGES.COMMANDS.ANIME.QUOTE;
