const MESSAGES = {
	COMMANDS: {
		FUN: {
			CUISINE: {
				name: 'cuisine',
				description: 'Remettre les femmes à leur place',
				args: [true, [1, 'strict']],
				usage: '<utilisateur>',
				category: 'fun',
				aliases: [],
			},
			LOVETEST: {
				name: 'lovetest',
				description: "Découvrez quel pourcentage d'amour vous avez avec un autre membre",
				args: [true, [1, 'strict']],
				usage: '<membre>',
				category: 'fun',
				aliases: ['lv', 'lt', 'love'],
			},
			SHEESH: {
				name: 'sheesh',
				description: 'Sheesh',
				args: [false, [0, '']],
				usage: '',
				category: 'fun',
				aliases: [],
			},
		},
		GAMES: {
			BALL: {
				name: '8ball',
				description: 'Posez une question !',
				args: [true, [100, '']],
				usage: '<question>',
				category: 'games',
				aliases: ['8b'],
			},
			DICE: {
				name: 'dice',
				description: 'Jeu de dés',
				args: [false, [2, '']],
				usage: '[duel] <utilisateur>',
				category: 'games',
				aliases: ['d'],
			},
		},
		GENERAL: {
			HELP: {
				name: 'help',
				description: 'Informations sur les commandes du bot',
				category: 'general',
				usage: '[commande]',
				args: [false, [1, '']],
				aliases: ['h'],
			},
			PING: {
				name: 'ping',
				description: 'Envoie Pong!',
				args: [false, [0, '']],
				category: 'general',
				usage: '',
				aliases: [],
			},
		},
		MEMES: {
			MATH: {
				name: 'math',
				description: 'Génère un meme de maths aléatoire',
				args: [false, [0, '']],
				category: 'memes',
				usage: '',
				aliases: ['maths'],
			},
			SHREK: {
				name: 'shrek',
				description: 'Génère un meme aléatoire de shrek',
				args: [false, [0, '']],
				category: 'memes',
				usage: '',
				aliases: [],
			},
		},
		MISC: {
			AVATAR: {
				name: 'avatar',
				description: "Envoie l'avatar de l'utilisateur",
				args: [false, [1, '']],
				usage: '[utilisateur]',
				category: 'misc',
				aliases: ['pp', 'a'],
			},
			WALLPAPER: {
				name: 'wallpaper',
				description: "Génère un fond d'écran aléatoire",
				args: [false, [4, '']],
				usage: '[mobile/desktop/add] [type]/<appareil> <type> <url>',
				category: 'misc',
				aliases: ['wp'],
			},
		},
		MODERATION: {
			BAN: {
				name: 'ban',
				description: 'Bannir un membre',
				args: [true, [100, '']],
				usage: '<membre> [raison]',
				category: 'moderation',
				aliases: ['b'],
				permission: 'BAN_MEMBERS',
			},
			CLEAR: {
				name: 'clear',
				description: 'Nettoie le channel',
				args: [false, [1, '']],
				permission: 'MANAGE_MESSAGES',
				usage: '[nombre]',
				cooldown: 5,
				category: 'moderation',
				aliases: ['c'],
			},
			KICK: {
				name: 'kick',
				description: 'Expulse un membre',
				args: [true, [100, '']],
				usage: '<membre> [raison]',
				category: 'moderation',
				aliases: ['k'],
				permission: 'KICK_MEMBERS',
			},
			ROLE: {
				name: 'role',
				description: 'Gérer les rôles',
				args: [true, [3, 'strict']],
				permission: 'MANAGE_ROLES',
				usage: '<add/adds/remove/removes> <utilisateur> <role/roles>',
				category: 'moderation',
				aliases: ['r'],
			},
			AVERT: {
				name: 'avert',
				description: 'Avertissez un membre !',
				args: [true, [1, 'strict']],
				usage: '<membre>',
				category: 'moderation',
				permission: 'KICK_MEMBERS',
				aliases: ['av'],
			},
		},
		ADMIN: {
			RELOAD: {
				name: 'reload',
				description: 'Relancer le bot',
				args: [false, [0, 'strict']],
				usage: '',
				category: 'admin',
				aliases: ['rl'],
				permission: 'ADMINISTRATOR',
			},
			CONFIG: {
				name: 'config',
				description: 'Modifier la config du bot',
				args: [true, [999, '']],
				usage: '<clé> [valeur]',
				category: 'admin',
				aliases: ['cg'],
				permission: 'ADMINISTRATOR',
			},
			EVAL: {
				name: 'eval',
				description: 'Tester du javascript',
				args: [true, [999, '']],
				usage: '<code>',
				category: 'admin',
				aliases: ['ev'],
				permission: 'ADMINISTRATOR',
			},
		},
	},
};

const ROLES = {
	ONJOIN: '839420010203447296',
};

const CHANNELS = {
	LOGSCHANNEL: '825759707087765504',
	WELCOMECHANNEL: '840203319254188063',
	ROADTOCHANNEL: '851794676637630494',
	DISCUSSCHANNEL: '826673568930594816',
	QUITCHANNEL: '846288755480592435',
	ROLECHANNEL: '846459783674593371',
	MEMESCHANNEL: '845273490764333057',
};

const GUILD = {
	ID: '825753614898167848',
	ROADTO: 50,
};

exports.MESSAGES = MESSAGES;
exports.ROLES = ROLES;
exports.CHANNELS = CHANNELS;
exports.GUILD = GUILD;
