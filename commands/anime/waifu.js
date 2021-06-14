const { MESSAGES } = require('../../utils/consts');
const fetch = require('node-fetch');

module.exports.run = (client, message, args) => {
	fetch('https://waifu.pics/api/sfw/waifu').then((res) =>
		res.json().then((url) => {
			message.channel.send(url.url);
		})
	);
};

module.exports.help = MESSAGES.COMMANDS.ANIME.WAIFU;
