module.exports.emotes = (client) => {
	const guild = client.guilds.cache.get('825753614898167848');
	const emotesCache = guild.emojis.cache;

	return [
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
};

exports.emoteList = [
	'bronze1',
	'silv1',
	'gold1',
	'plat1',
	'diam1',
	'c1',
	'gc1',
	'ssl',
	'sign_male',
	'sign_female',
	'playstation',
	'windows_10',
	'switch',
	'xbox',
	'developer',
	'flstudio',
	'zerotwo',
	'controller',
	'rocketleague',
	'overwatch',
	'sword',
];
