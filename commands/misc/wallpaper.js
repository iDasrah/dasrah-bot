const { mobile, desktop } = require('../../json/wallpapers.json');
const {
	getFromType,
	sendWallpaper,
	sendWallpaperByDevice,
	sendWallpaperByType,
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
	}
};

module.exports.help = MESSAGES.COMMANDS.MISC.WALLPAPER;
