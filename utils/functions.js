const { createCanvas, loadImage } = require('canvas');
const { MessageAttachment, MessageEmbed } = require('discord.js');
const currentRoadTo = 50;

function random(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

// clear the old messages
const clearChannel = async (channel) =>
	await channel.messages.fetch({ limit: 100 }).then((messages) => {
		channel.bulkDelete(messages);
	});

async function sendBar(channel, guild) {
	const canva = createCanvas(562, 319);
	const ctx = canva.getContext('2d');
	const bg = await loadImage('./assets/img/canvas_background.jpg');

	ctx.drawImage(bg, 0, 0, canva.width, canva.height);
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = '#63cdda';
	ctx.globalAlpha = 0.5;
	ctx.fillStyle = '#303952';
	ctx.fillRect(100, 134, 362, 50);
	ctx.globalAlpha = 1;
	ctx.strokeRect(100, 134, 362, 50);

	ctx.fillStyle = '#32ff7e';
	ctx.globalAlpha = 0.8;
	ctx.fillRect(101, 134, (100 / currentRoadTo) * guild.memberCount * 3.61, 50);

	ctx.globalAlpha = 1;
	ctx.fillStyle = '#fff';

	ctx.font = '40px Arial';
	ctx.textAlign = 'center';
	ctx.fillText(`ROAD TO ${currentRoadTo} MEMBRES !`, 281, 60);

	ctx.font = '20px Arial';
	ctx.textAlign = 'center';
	ctx.fillText(`${guild.memberCount} / ${currentRoadTo}`, 281, 166);

	const attachment = new MessageAttachment(canva.toBuffer(), 'roadto.png');
	channel.send(attachment);
}

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

function addRole(taggedMember, role, message) {
	if (role) {
		if (taggedMember.roles.cache.has(role.id)) return message.reply(bot_messages['has-role']);
		taggedMember.roles
			.add(role)
			.then(() => message.channel.send(`Vous avez donné le rôle ${role} à ${taggedMember.user}`));
	} else return message.reply(bot_messages['role-doesnt-exist']);
}

function removeRole(taggedMember, role, message) {
	if (role) {
		if (!taggedMember.roles.cache.has(role.id)) return message.reply(bot_messages['hasnt-role']);
		taggedMember.roles
			.remove(role)
			.then(() =>
				message.channel.send(`Vous avez supprimé le rôle ${role} de ${taggedMember.user}`)
			);
	} else return message.reply(bot_messages['role-doesnt-exist']);
}

module.exports = {
	random,
	sendBar,
	clearChannel,
	getFromType,
	sendWallpaper,
	sendWallpaperByDevice,
	sendWallpaperByType,
	addToList,
	addRole,
	removeRole,
};
