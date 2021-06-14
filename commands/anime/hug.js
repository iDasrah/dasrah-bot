const { MESSAGES } = require('../../utils/consts');
const fetch = require('node-fetch');

module.exports.run = (client, message, args) => {
	const taggedUser = message.mentions.users.first();
	fetch('https://waifu.pics/api/sfw/hug').then((res) =>
		res.json().then((url) => {
			message.channel.send(`${message.author} fait un câlin à ${taggedUser}.`, {
				files: [url.url],
			});
		})
	);
};

module.exports.help = MESSAGES.COMMANDS.ANIME.HUG;
