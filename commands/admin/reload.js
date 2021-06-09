const { MESSAGES } = require('../../utils/consts');

module.exports.run = async (client, message, args) => {
	await message.delete();
	process.exit();
};

module.exports.help = MESSAGES.COMMANDS.ADMIN.RELOAD;
