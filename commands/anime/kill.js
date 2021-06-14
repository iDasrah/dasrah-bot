const fetch = require('node-fetch');
const { MESSAGES } = require('../../utils/consts');

module.exports.run = (client, message, args) => {
	const taggedUser = message.mentions.users.first();
	fetch('https://waifu.pics/api/sfw/kill').then((res) =>
		res.json().then((url) => {
			message.channel.send(`${message.author} a tué ${taggedUser}.`, {
				files: [url.url],
			});
		})
	);
};

module.exports.help = MESSAGES.COMMANDS.ANIME.KILL;
