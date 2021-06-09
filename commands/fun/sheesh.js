const { MESSAGES } = require('../../utils/consts');

module.exports.run = (client, message, args) => {
	e = 'E'.repeat(Math.floor(Math.random() * (50 - 2) + 2));
	message.channel.send(`SH${e}SH`);
};

module.exports.help = MESSAGES.COMMANDS.FUN.SHEESH;
