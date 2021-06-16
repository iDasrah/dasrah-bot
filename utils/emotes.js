module.exports.emotes = (client) => {
	const guild = client.guilds.cache.get('825753614898167848');
	const emotesCache = guild.emojis.cache;

	return [
		[
			(male_sign = emotesCache.get('847068292665442334')),
			(female_sign = emotesCache.get('847068267771854848')),
			(minor = emotesCache.get('854643742694965249')),
			(major = emotesCache.get('853714803062734878')),
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
			(playstationEmote = emotesCache.get('847098234870038568')),
			(switchEmote = emotesCache.get('847098233931169813')),
			(windowsEmote = emotesCache.get('847098235037810698')),
			(xboxEmote = emotesCache.get('847098234560315402')),
		],
		[
			(bronzeEmote = emotesCache.get('846447775272271914')),
			(silverEmote = emotesCache.get('846447776564641812')),
			(goldEmote = emotesCache.get('846447776140361818')),
			(platinumEmote = emotesCache.get('846447778551955477')),
			(diamondEmote = emotesCache.get('846447778077999165')),
			(championEmote = emotesCache.get('846447778049818634')),
			(grandChampionEmote = emotesCache.get('846453881902202911')),
			(sslEmote = emotesCache.get('846453881956597760')),
		],
		[
			(javascriptEmote = emotesCache.get('854654750859722752')),
			(html_cssEmote = emotesCache.get('854654750901010442')),
			(c_cppEmote = emotesCache.get('854654750569922573')),
			(csharpEmote = emotesCache.get('854654750897078282')),
			(javaEmote = emotesCache.get('854654750875713536')),
			(pythonEmote = emotesCache.get('854654750515134495')),
		],
	];
};

exports.emoteList = [
	'sign_male',
	'sign_female',
	'underage',
	'yes',
	'developer',
	'flstudio',
	'controller',
	'zerotwo',
	'sword',
	'rocketleague',
	'overwatch',
	'playstation',
	'switch',
	'windows_10',
	'xbox',
	'bronze1',
	'silv1',
	'gold1',
	'plat1',
	'diam1',
	'c1',
	'gc1',
	'ssl',
	'javascript',
	'html',
	'cpp',
	'cs',
	'java',
	'python',
];
