const { MessageEmbed } = require('discord.js');
const memes = require('../../json/memes.json');
const { loadBar, clearChannel } = require('../../utils/functions');
const { GUILD, CHANNELS } = require('../../utils/consts');

let memesList = [];

// chargement de tous les memes dans la liste
for (const category in memes) {
	for (const meme in memes[category]) {
		memesList.push(memes[category][meme].url);
	}
}

module.exports = async (client) => {
	console.log(`${memesList.length} memes chargés !`);

	const guild = client.guilds.cache.get(GUILD.ID);
	const roleChannel = guild.channels.cache.get(CHANNELS.ROLECHANNEL);
	const roadToChannel = guild.channels.cache.get(CHANNELS.ROADTOCHANNEL);

	const settings = await client.getGuild(guild);

	const members = guild.members.cache;

	members.forEach(async (member) => {
		if (member.user.bot) return;
		else if (!(await client.getUser(member))) {
			const newMember = {
				guildID: member.guild.id,
				guildName: member.guild.name,
				userID: member.id,
				userName: member.user.username,
			};
			await client.createUser(newMember);
		}
	});

	// load all messages of role channel
	roleChannel.messages.fetch();

	// road to bar
	clearChannel(roadToChannel);
	loadBar(roadToChannel, guild);

	// confirmations
	console.log('Messages de rôles envoyés !');
	console.log(`${client.config.bot_info.name}: Je suis prête !`);

	// status
	client.user.setPresence({
		activity: {
			name: `${settings.prefix}help pour de l'aide.`,
		},
	});

	// meme interval
	client.setInterval(() => {
		console.log('Sent a meme!');
		const memesChannel = client.channels.cache.get(CHANNELS.MEMESCHANNEL);
		const embed = new MessageEmbed()
			.setColor('#FE2EE4')
			.setTitle('RANDOM MEME GENERATOR')
			.setTimestamp()
			.setImage(memesList[Math.floor(Math.random() * memesList.length)]);
		memesChannel.send(embed);
	}, 60 * 60 * 1000);
};
