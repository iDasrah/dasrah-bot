const { MESSAGES } = require('../../utils/consts');
const { random } = require('../../utils/functions');

module.exports.run = (client, message, args) => {
	message.channel.send(`La plus belle :heart:`, { files: [`./assets/ya/${random(1, 9)}.jpg`] });
};

module.exports.help = MESSAGES.COMMANDS.MISC.YAELLE;
