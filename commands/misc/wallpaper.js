const { mobile, desktop } = require('../../json/wallpapers.json');
const { isURL } = require('validator');
const {
	getFromType,
	sendWallpaper,
	sendWallpaperByDevice,
	sendWallpaperByType,
	addToList,
} = require('../../utils/functions');
const { MESSAGES } = require('../../utils/consts');

module.exports.run = (client, message, args) => {
	if (!args.length) {
		sendWallpaper(message);
	} else if (args[0] === 'mobile') {
		if (args[1]) {
			return sendWallpaperByType(message, args[0], getFromType(args[0], args[1]));
		}

		return sendWallpaperByDevice(message, mobile);
	} else if (args[0] === 'desktop') {
		if (args[1]) {
			return sendWallpaperByType(message, args[0], getFromType(args[0], args[1]));
		}
		return sendWallpaperByDevice(message, desktop);
	} else if (args[0] === 'add') {
		if (!args[1]) return message.reply(client.config.bot_messages['not_enough_arguments_error']);
		else if (!(args[1] === 'mobile' || args[1] === 'desktop'))
			return message.reply(`${client.config.bot_messages['wrong_argument_error']} (${args[1]})`);
		else if (!args[2])
			return message.reply(client.config.bot_messages['not_enough_arguments_error']);
		else if (!args[3])
			return message.reply(client.config.bot_messages['not_enough_arguments_error']);
		else if (!isURL(args[3])) return message.reply(client.config.bot_messages['no_valid_url']);
		else if (!message.guild.roles.cache.has('840677230555955252'))
			return message.reply(`$
      {client.config.bot_messages['no_permission_error']} Ou à un <@&840677230555955252> !`);

		addToList(args[1], args[2], args[3]);
		message.reply(messages['add_wallpaper_success']);
	}
};

module.exports.help = MESSAGES.COMMANDS.MISC.WALLPAPER;
