const { bot_info, prefix } = require('../../json/config.json');
const { MessageEmbed, MessageAttachment } = require('discord.js');
const memes = require('../../json/memes.json');
const { createCanvas, loadImage } = require('canvas');
const { sendBar, clearChannel } = require('../../utils/functions');
const { loadEmbeds } = require('../../utils/embeds');
const { roles } = require('../../utils/roles');
const { emotes } = require('../../utils/emotes');

let memesList = [];
const currentRoadTo = 50;

// chargement de tous les memes dans la liste
for (const category in memes) {
	for (const meme in memes[category]) {
		memesList.push(memes[category][meme].url);
	}
}

module.exports = (client) => {
	console.log(`${memesList.length} memes chargés !`);

	const guild = client.guilds.cache.get('825753614898167848');
	const roleChannel = guild.channels.cache.get('846459783674593371');
	const roadToChannel = guild.channels.cache.get('851794676637630494');

	// init embeds and roles/emotes
	const embeds = loadEmbeds(client);
	const roleList = roles(client);
	const emoteList = emotes(client);

	clearChannel(roleChannel);

	// send roles messages + reacts
	for (let role = 0; role < roleList.length; role++) {
		client.channels.cache
			.get('846459783674593371')
			.send(embeds[role])
			.then(async (msg) => {
				for (let emote = 0; emote < emoteList[role].length; emote++) {
					const thisEmote = emoteList[role][emote];
					await msg.react(thisEmote.toString());
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	// road to bar
	clearChannel(roadToChannel);
	sendBar(roadToChannel, guild);

	// confirmations
	console.log('Messages de rôles envoyés !');
	console.log(`${bot_info.name}: Je suis prête !`);

	// status
	client.user.setPresence({
		activity: {
			name: `${prefix}help pour de l'aide.`,
		},
	});

	// meme interval
	client.setInterval(() => {
		console.log('Sent a meme!');
		const channel = client.channels.cache.get('845273490764333057');
		const embed = new MessageEmbed()
			.setColor('#FE2EE4')
			.setTitle('RANDOM MEME GENERATOR')
			.setTimestamp()
			.setImage(memesList[Math.floor(Math.random() * memesList.length)]);
		channel.send(embed);
	}, 60 * 60 * 1000);
};
