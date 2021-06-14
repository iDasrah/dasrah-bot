const { MESSAGES } = require('../../utils/consts');
const fetch = require('node-fetch');
const translate = require('@iamtraction/google-translate');

module.exports.run = (client, message, args) => {
	fetch('https://animechan.vercel.app/api/random')
		.then((response) => response.json())
		.then((quote) => {
			translate(quote.quote, { to: 'fr' }).then((res) => {
				message.channel.send(`${res.text}\r\n~${quote.character}, ${quote.anime}`);
			});
		});
};

module.exports.help = MESSAGES.COMMANDS.ANIME.QUOTE;
