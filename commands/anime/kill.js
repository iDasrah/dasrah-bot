const fetch = require('node-fetch');
const { MESSAGES } = require('../../utils/consts');

module.exports.run = async (client, message, args) => {
	const taggedUser = message.mentions.users.first();
	const res = await fetch('https://waifu.pics/api/sfw/kill');
	if (res.ok) {
		const img = await res.json();
		message.channel.send(`${message.author} a tué ${taggedUser}.`, {
			files: [img.url],
		});
	} else message.reply(`une erreur est survenue. Code: ${res.status}`);
};

module.exports.help = MESSAGES.COMMANDS.ANIME.KILL;
