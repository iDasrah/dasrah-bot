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
				tag: true,
				permission: '',
			},
			LOVETEST: {
				name: 'lovetest',
				description: "Découvrez quel pourcentage d'amour vous avez avec un autre membre",
				args: [true, [1, 'strict']],
				usage: '<membre>',
				category: 'fun',
				aliases: ['lv', 'lt', 'love'],
				tag: true,
				permission: '',
			},
			SHEESH: {
				name: 'sheesh',
				description: 'Sheesh',
				args: [false, [0, '']],
				usage: '',
				category: 'fun',
				aliases: [],
				tag: false,
				permission: '',
			},
			IAMBORED: {
				name: 'iambored',
				description: 'Trouve une occupation',
				args: [false, [0, 'stricts']],
				usage: '',
				category: 'fun',
				aliases: ['bored'],
				tag: false,
				permission: '',
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
				permission: '',
				tag: false,
			},
			DICE: {
				name: 'dice',
				description: 'Jeu de dés',
				args: [false, [2, '']],
				usage: '[duel] <utilisateur>',
				category: 'games',
				aliases: ['d'],
				tag: false,
				permission: '',
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
				tag: false,
				permission: '',
			},
			PING: {
				name: 'ping',
				description: 'Envoie Pong!',
				args: [false, [0, '']],
				category: 'general',
				usage: '',
				aliases: [],
				tag: false,
				permission: '',
			},
			LEVEL: {
				name: 'level',
				description: 'Regarde ton expérience',
				args: [false, [1, '']],
				usage: '[membre]',
				category: 'general',
				aliases: ['lvl'],
				permission: '',
				tag: false,
			},
			TOP: {
				name: 'top',
				description: 'Classement des niveaux',
				args: [false, [0, 'strict']],
				usage: '',
				category: 'general',
				aliases: [],
				tag: false,
				permission: '',
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
				tag: false,
				permission: '',
			},
			SHREK: {
				name: 'shrek',
				description: 'Génère un meme aléatoire de shrek',
				args: [false, [0, '']],
				category: 'memes',
				usage: '',
				aliases: [],
				tag: false,
				permission: '',
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
				tag: false,
				permission: '',
			},
			WALLPAPER: {
				name: 'wallpaper',
				description: "Génère un fond d'écran aléatoire",
				args: [false, [4, '']],
				usage: '[mobile/desktop] [type]',
				category: 'misc',
				aliases: ['wp'],
				tag: false,
				permission: '',
			},
			YAELLE: {
				name: 'yaelle',
				description: '',
				args: [false, [0, 'strict']],
				usage: '',
				category: '',
				aliases: [],
				tag: false,
				permission: '',
			},
			APOD: {
				name: 'apod',
				description: "Génère la photo d'astronomie du jour",
				args: [false, [0, 'strict']],
				usage: '',
				category: 'misc',
				aliases: [],
				tag: false,
				permission: '',
			},
			NBRFACT: {
				name: 'nbrfact',
				description: 'Anecdote sur un nombre',
				args: [false, [0, '']],
				usage: '',
				category: 'misc',
				aliases: [],
				tag: false,
				permission: '',
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
				tag: true,
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
				tag: false,
			},
			KICK: {
				name: 'kick',
				description: 'Expulse un membre',
				args: [true, [100, '']],
				usage: '<membre> [raison]',
				category: 'moderation',
				aliases: ['k'],
				permission: 'KICK_MEMBERS',
				tag: true,
			},
			ROLE: {
				name: 'role',
				description: 'Gérer les rôles',
				args: [true, [3, 'strict']],
				permission: 'MANAGE_ROLES',
				usage: '<add/adds/remove/removes> <utilisateur> <role/roles>',
				category: 'moderation',
				aliases: ['r'],
				tag: true,
			},
			AVERT: {
				name: 'avert',
				description: 'Avertissez un membre !',
				args: [true, [1, 'strict']],
				usage: '<membre>',
				category: 'moderation',
				permission: 'KICK_MEMBERS',
				aliases: ['av'],
				tag: true,
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
				tag: false,
			},
			CONFIG: {
				name: 'config',
				description: 'Modifier la config du bot',
				args: [true, [999, '']],
				usage: '<clé> [valeur]',
				category: 'admin',
				aliases: ['cg'],
				permission: 'ADMINISTRATOR',
				tag: false,
			},
			EVAL: {
				name: 'eval',
				description: 'Tester du javascript',
				args: [true, [999, '']],
				usage: '<code>',
				category: 'admin',
				aliases: ['ev'],
				permission: 'ADMINISTRATOR',
				tag: false,
			},
			SETLEVEL: {
				name: 'setlevel',
				description: "Change le level d'un membre",
				args: [true, [2, 'strict']],
				usage: '<membre> <niveau>',
				category: 'admin',
				aliases: ['setlvl', 'slvl'],
				tag: true,
				permission: 'ADMINISTRATOR',
			},
			REACTROLES: {
				name: 'reactroles',
				description: 'Envoie les messages de rôles',
				args: [false, [0, '']],
				usage: '',
				category: 'admin',
				aliases: ['rr'],
				tag: false,
				permission: 'ADMINISTRATOR',
			},
		},
		ANIMATION: {
			EVENT: {
				name: 'event',
				description: 'Créer un salon vocal dédié à un évènement',
				args: [true, [100, '']],
				usage: '<event>',
				category: 'animation',
				aliases: ['ev'],
				permission: 'MANAGE_CHANNELS',
				tag: false,
			},
			ENDEVENTS: {
				name: 'endevent',
				description: 'Arrêtez un évènement',
				args: [true, [100, '']],
				usage: '',
				category: 'animation',
				aliases: ['endev'],
				permission: 'MANAGE_CHANNELS',
				tag: false,
			},
			SURVEY: {
				name: 'survey',
				description: 'Organise un sondage',
				args: [true, [999, '']],
				usage: '<sondage>',
				category: 'animation',
				aliases: ['sv', 'srv'],
				tag: false,
				permission: 'MANAGE_CHANNELS',
			},
		},
		ANIME: {
			QUOTE: {
				name: 'quote',
				description: 'Génère une citation',
				args: [false, [0, 'strict']],
				usage: '',
				category: 'anime',
				aliases: ['qt'],
				permission: '',
				tag: false,
			},
			WAIFU: {
				name: 'waifu',
				description: 'Génère une waifu',
				args: [false, [0, 'strict']],
				usage: '',
				category: 'anime',
				aliases: [],
				permission: '',
				tag: false,
			},
			HUG: {
				name: 'hug',
				description: 'Calin',
				args: [true, [1, 'strict']],
				usage: '<membre>',
				category: 'anime',
				aliases: [],
				permission: '',
				tag: true,
			},
			KILL: {
				name: 'kill',
				description: 'Tue un membre',
				args: [true, [1, 'strict']],
				usage: '<membre>',
				category: 'anime',
				aliases: [],
				permission: '',
				tag: true,
			},
			ANIME: {
				name: 'anime',
				description: 'Génère un anime',
				args: [false, [1]],
				usage: '<type>',
				category: 'anime',
				aliases: [],
				tag: false,
				permission: '',
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
	EVENTCATEGORY: '852641399735713803',
};

const GUILD = {
	ID: '825753614898167848',
};

const EVENTS = {
	GARTICPHONE: {
		name: 'garticphone',
		channel: 'gartic phone',
	},
	SKRIBBL: {
		name: 'skribbl',
		channel: 'skribbl',
	},
	MINECRAFT: {
		name: 'minecraft',
		channel: 'minecraft',
	},
	KCULTURE: {
		name: 'kculture',
		channel: 'kculture',
	},
};

exports.MESSAGES = MESSAGES;
exports.ROLES = ROLES;
exports.CHANNELS = CHANNELS;
exports.GUILD = GUILD;
exports.EVENTS = EVENTS;
