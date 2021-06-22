const { MESSAGES } = require('../../utils/consts');
const fetch = require('node-fetch');

module.exports.run = async (client, message, args) => {
	const res = await fetch('https://waifu.pics/api/sfw/waifu');
	if (res.ok) {
		const img = await res.json();
		message.channel.send({ files: [img.url] });
	} else message.reply(`une erreur est survenue. Code: ${res.status}`);
};

module.exports.help = MESSAGES.COMMANDS.ANIME.WAIFU;
