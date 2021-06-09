const { MESSAGES } = require('../../utils/consts');

module.exports.run = (client, message, args) => {
	message.channel.send('Pong!');
};

module.exports.help = MESSAGES.COMMANDS.GENERAL.PING;
