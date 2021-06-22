const { MESSAGES } = require('../../utils/consts');
const fetch = require('node-fetch');

module.exports.run = async (client, message, args) => {
	const taggedUser = message.mentions.users.first();
	const res = await fetch('https://waifu.pics/api/sfw/hug');
	if (res.ok) {
		const img = await res.json();
		return message.channel.send(`${message.author} fait un câlin à ${taggedUser}.`, {
			files: [img.url],
		});
	} else message.reply(`une erreur est survenue. Code: ${res.status}`);
};

module.exports.help = MESSAGES.COMMANDS.ANIME.HUG;
