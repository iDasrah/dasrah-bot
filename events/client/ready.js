const { readdirSync } = require('fs');
const { memeFiles } = require('../../main');
const { bot_info, prefix, intervalMeme } = require('../../json/config.json');
const { MessageEmbed } = require('discord.js');

let memes = [];

for(const memeFile of memeFiles) {
	const file = require(`../../json/${memeFile}`);
	file.memes.forEach(meme => memes.push(meme.url));
}

module.exports = (client) => {
  
	console.log(`${memes.length} memes chargés !`);
	console.log(`${bot_info.name}: I'm ready !`);

	// status
	client.user.setPresence({
		activity: {
			name: `${prefix}help pour de l'aide.`
		}
	});

	// meme intervalle
	const memeInterval = intervalMeme * 60 * 1000;
	client.setInterval(() => {
		console.log('Sent a meme!')
		const channel = client.channels.cache.get('845273490764333057');
		const embed = new MessageEmbed()
		.setColor('#FE2EE4')
		.setTitle('RANDOM MEME GENERATOR')
		.setTimestamp()
		.setImage(memes[Math.floor(Math.random() * memes.length)]);
		channel.send(embed);
	}, memeInterval);

}