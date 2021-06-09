const { mobile, desktop, descriptions } = require('../../json/wallpapers.json');
const { MessageEmbed } = require('discord.js');
const { bot_messages } = require('../../json/config.json');
const editJsonFile = require('edit-json-file');
const { isURL } = require('validator');
const { random } = require('../../utils/functions');
const { MESSAGES } = require('../../utils/consts');

function getFromType(device, type) {
	device = device === 'desktop' ? desktop : mobile;
	urls = [];

	device.forEach((wallpaper) => {
		if (wallpaper.type === type) {
			urls.push(wallpaper.url);
		}
	});

	return urls;
}

function sendWallpaper(message) {
	choice = random(0, 2);

	device = choice === 0 ? mobile : desktop;

	sendWallpaperByDevice(message, device);
}

function sendWallpaperByDevice(message, device) {
	const embed = new MessageEmbed()
		.setColor('#F7B2EE')
		.setDescription(descriptions[random(0, descriptions.length)])
		.setTimestamp();
	image = device[random(0, device.length)].url;

	device = device === desktop ? 'desktop' : 'mobile';

	if (device.length <= 1) return message.reply(bot_messages['no-urls-wallpaper']);

	embed.setTitle(`${device.toUpperCase()} WALLPAPER GENERATOR`).setImage(image);
	message.channel.send(embed);
}

function sendWallpaperByType(message, device, urls) {
	const embed = new MessageEmbed()
		.setColor('#F7B2EE')
		.setDescription(descriptions[random(0, descriptions.length)])
		.setTimestamp();
	image = urls[random(0, urls.length)];

	if (urls.length < 1) return message.reply(bot_messages['no-urls-wallpaper']);

	embed.setTitle(`${device.toUpperCase()} WALLPAPER GENERATOR`).setImage(image);
	message.channel.send(embed);
}

function addToList(device, type, url) {
	const file = editJsonFile(`${__dirname}/wallpapers.json`);

	file.append(device, { type: type, url: url });
	file.save();
}

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
		if (!args[1]) return message.reply(bot_messages['not-enough-arguments-error']);
		else if (!(args[1] === 'mobile' || args[1] === 'desktop'))
			return message.reply(`${bot_messages['wrong-argument-error']} (${args[1]})`);
		else if (!args[2]) return message.reply(bot_messages['not-enough-arguments-error']);
		else if (!args[3]) return message.reply(bot_messages['not-enough-arguments-error']);
		else if (!isURL(args[3])) return message.reply(bot_messages['no-valid-url']);
		else if (!message.guild.roles.cache.has('840677230555955252'))
			return message.reply(`$
      {bot_messages['no-permission-error']} Ou à un <@&840677230555955252> !`);

		addToList(args[1], args[2], args[3]);
		message.reply(messages['add-wallpaper-success']);
	}
};

module.exports.help = MESSAGES.COMMANDS.MISC.WALLPAPER;
