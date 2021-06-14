const { random } = require('../../utils/functions');

module.exports.run = (client, message, args) => {
	message.channel.send(`La plus belle :heart:`, { files: [`./assets/ya/${random(1, 10)}.jpg`] });
};

module.exports.help = {
	name: 'yaelle',
	description: '',
	args: [false, [0, 'strict']],
	usage: '',
	category: '',
	aliases: [],
	tag: false,
	permission: '',
};
