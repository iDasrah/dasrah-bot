const { bot_info, prefix } = require('../../json/config.json');
const { MessageEmbed, MessageAttachment } = require('discord.js');
const memes = require('../../json/memes.json');
const { createCanvas, loadImage } = require('canvas');
const { sendBar, clearChannel } = require('../../utils/functions');

let memesList = [];
const currentRoadTo = 50;

// chargement de tous les memes dans la liste
for (const category in memes) {
	for (const meme in memes[category]) {
		memesList.push(memes[category][meme].url);
	}
}

// chargement des embeds prédéfinis
embedRL = () => {
	const embed = new MessageEmbed().setTimestamp();
	embed
		.setTitle('ROCKET LEAGUE RANKS')
		.setDescription('Cliquez sur une réaction pour vous attribuer un rôle.')
		.addField(
			'Rôles disponibles:',
			`${bronze1} : ${bronze.toString()}
		${silver1} : ${silver.toString()}
		${gold1} : ${gold.toString()}
		${platinum1} : ${platinum.toString()}
		${diamond1} : ${diamond.toString()}
		${champion1} : ${champion.toString()}
		${grandChampion1} : ${grandChampion}
		${sslEmote} : ${ssl}
		`
		);
	return embed;
};

embedSEX = () => {
	const embed = new MessageEmbed().setTimestamp();
	embed
		.setTitle('SEXE')
		.setDescription('Cliquez sur une réaction pour vous attribuer un rôle.')
		.addField(
			'Rôles disponibles',
			`${male_sign} : ${man.toString()}
    ${female_sign} : ${woman.toString()}
		`
		);
	return embed;
};

embedPLATFORM = () => {
	const embed = new MessageEmbed().setTimestamp();
	embed
		.setTitle('PLATEFORME')
		.setDescription('Cliquez sur une réaction pour vous attribuer un rôle.')
		.addField(
			'Rôles disponibles',
			`
      ${playstationEmote} : ${playstation.toString()}
      ${switchEmote} : ${nswitch.toString()}
      ${windowsEmote} : ${windows.toString()}
      ${xboxEmote} : ${xbox.toString()}
      `
		);

	return embed;
};

embedHOBBY = () => {
	const embed = new MessageEmbed().setTimestamp();
	embed
		.setTitle("CENTRES D'INTERET")
		.setDescription('Cliquez sur une réaction pour vous attribuer un rôle.')
		.addField(
			'Rôles disponibles',
			`
		${programmationEmote} : ${developer.toString()}
		${beatmakingEmote} : ${beatmaker.toString()}
		${videogamesEmote} : ${videogames.toString()}
		${animeEmote} : ${anime.toString()}
		`
		);

	return embed;
};

embedGAMES = () => {
	const embed = new MessageEmbed().setTimestamp();
	embed
		.setTitle('JEUX')
		.setDescription('Cliquez sur une réaction pour vous attribuer un rôle.')
		.addField(
			'Rôles disponibles',
			`
			${minecraftEmote} : ${minecraft.toString()}
			${rocketleagueEmote} : ${rocketleague.toString()}
			${overwatchEmote} : ${overwatch.toString()}
			`
		);

	return embed;
};

module.exports = (client) => {
	console.log(`${memesList.length} memes chargés !`);

	const guild = client.guilds.cache.get('825753614898167848');
	const roleChannel = guild.channels.cache.get('846459783674593371');
	const roadToChannel = guild.channels.cache.get('851794676637630494');
	const rolesCache = guild.roles.cache;
	const emotesCache = guild.emojis.cache;

	// roles
	const roles = [
		[
			(bronze = rolesCache.get('846328120289525781')),
			(silver = rolesCache.get('846328390147112981')),
			(gold = rolesCache.get('846328466509135873')),
			(platinum = rolesCache.get('846328611014705162')),
			(diamond = rolesCache.get('846328675430563870')),
			(champion = rolesCache.get('846328670485217281')),
			(grandChampion = rolesCache.get('846328873892839456')),
			(ssl = rolesCache.get('846329006240563200')),
		],
		[(man = rolesCache.get('844710960496377864')), (woman = rolesCache.get('844679115189125122'))],
		[
			(playstation = rolesCache.get('846432721139793960')),
			(nswitch = rolesCache.get('846432745453387776')),
			(windows = rolesCache.get('846432682246144082')),
			(xbox = rolesCache.get('846432780253396994')),
		],
		[
			(developer = rolesCache.get('851725079158849546')),
			(beatmaker = rolesCache.get('851725252375216128')),
			(videogames = rolesCache.get('851725348440768542')),
			(anime = rolesCache.get('851725422067580929')),
		],
		[
			(minecraft = rolesCache.get('851743797776089109')),
			(rocketleague = rolesCache.get('846361799606796288')),
			(overwatch = rolesCache.get('851743893548564490')),
		],
	];

	// emotes
	const emotes = [
		[
			(bronze1 = emotesCache.get('846447775272271914')),
			(silver1 = emotesCache.get('846447776564641812')),
			(gold1 = emotesCache.get('846447776140361818')),
			(platinum1 = emotesCache.get('846447778551955477')),
			(diamond1 = emotesCache.get('846447778077999165')),
			(champion1 = emotesCache.get('846447778049818634')),
			(grandChampion1 = emotesCache.get('846453881902202911')),
			(sslEmote = emotesCache.get('846453881956597760')),
		],
		[
			(male_sign = emotesCache.get('847068292665442334')),
			(female_sign = emotesCache.get('847068267771854848')),
		],
		[
			(playstationEmote = emotesCache.get('847098234870038568')),
			(switchEmote = emotesCache.get('847098233931169813')),
			(windowsEmote = emotesCache.get('847098235037810698')),
			(xboxEmote = emotesCache.get('847098234560315402')),
		],
		[
			(programmationEmote = emotesCache.get('851731203391488021')),
			(beatmakingEmote = emotesCache.get('851732564549042187')),
			(videogamesEmote = emotesCache.get('851733034571005953')),
			(animeEmote = emotesCache.get('851733408970702858')),
		],
		[
			(minecraftEmote = emotesCache.get('851745982534123540')),
			(rocketleagueEmote = emotesCache.get('851745982629675028')),
			(overwatchEmote = emotesCache.get('851745983175327744')),
		],
	];

	// init embeds
	const embeds = [embedRL(), embedSEX(), embedPLATFORM(), embedHOBBY(), embedGAMES()];

	clearChannel(roleChannel);

	// send roles messages + reacts
	for (let role = 0; role < roles.length; role++) {
		client.channels.cache
			.get('846459783674593371')
			.send(embeds[role])
			.then(async (msg) => {
				for (let emote = 0; emote < emotes[role].length; emote++) {
					const thisEmote = emotes[role][emote];
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
