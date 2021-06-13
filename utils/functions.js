const { createCanvas, loadImage } = require('canvas');
const { MessageAttachment, MessageEmbed } = require('discord.js');
const { GUILD } = require('./consts');

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

async function loadBar(channel, guild) {
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
	ctx.fillRect(101, 134, (100 / GUILD.ROADTO) * guild.memberCount * 3.61, 50);

	ctx.globalAlpha = 1;
	ctx.fillStyle = '#fff';

	ctx.font = '40px Arial';
	ctx.textAlign = 'center';
	ctx.fillText(`ROAD TO ${GUILD.ROADTO} MEMBRES !`, 281, 60);

	ctx.font = '20px Arial';
	ctx.textAlign = 'center';
	ctx.fillText(`${guild.memberCount} / ${GUILD.ROADTO}`, 281, 166);

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

	if (device.length <= 1) {
		const embed = new MessageEmbed()
			.setTitle('ERROR: NO_URLS_WALLPAPER_ERROR')
			.setColor('#A80506')
			.setDescription(client.config.bot_messages['no_urls_wallpaper'])
			.addField('Usage', `${settings.prefix}${command.help.name} ${command.help.usage}`);
		return message.reply(embed);
	}

	embed.setTitle(`${device.toUpperCase()} WALLPAPER GENERATOR`).setImage(image);
	message.channel.send(embed);
}

function sendWallpaperByType(message, device, urls) {
	const embed = new MessageEmbed()
		.setColor('#F7B2EE')
		.setDescription(descriptions[random(0, descriptions.length)])
		.setTimestamp();
	image = urls[random(0, urls.length)];

	if (urls.length < 1) {
		const embed = new MessageEmbed()
			.setTitle('ERROR: NO_URLS_WALLPAPER_ERROR')
			.setColor('#A80506')
			.setDescription(client.config.bot_messages['no_urls_wallpaper'])
			.addField('Usage', `${settings.prefix}${command.help.name} ${command.help.usage}`);
		return message.reply(embed);
	}

	embed.setTitle(`${device.toUpperCase()} WALLPAPER GENERATOR`).setImage(image);
	message.channel.send(embed);
}

function addRole(taggedMember, role, message) {
	if (role) {
		if (taggedMember.roles.cache.has(role.id)) {
			const embed = new MessageEmbed()
				.setTitle('ERROR: HAS_ROLE_ERROR')
				.setColor('#A80506')
				.setDescription(client.config.bot_messages['has_role'])
				.addField('Usage', `${settings.prefix}${command.help.name} ${command.help.usage}`);
			return message.reply(embed);
		}
		taggedMember.roles
			.add(role)
			.then(() => message.channel.send(`Vous avez donné le rôle ${role} à ${taggedMember.user}`));
	} else {
		const embed = new MessageEmbed()
			.setTitle('ERROR: ROLE_DOESNT_EXIST_ERROR')
			.setColor('#A80506')
			.setDescription(client.config.bot_messages['role_doesnt_exist'])
			.addField('Usage', `${settings.prefix}${command.help.name} ${command.help.usage}`);
		return message.reply(embed);
	}
}

function removeRole(taggedMember, role, message) {
	if (role) {
		if (!taggedMember.roles.cache.has(role.id)) {
			const embed = new MessageEmbed()
				.setTitle('ERROR: HASNT_ROLE_ERROR')
				.setColor('#A80506')
				.setDescription(client.config.bot_messages['hasnt_role'])
				.addField('Usage', `${settings.prefix}${command.help.name} ${command.help.usage}`);
			return message.reply(embed);
		}
		taggedMember.roles
			.remove(role)
			.then(() =>
				message.channel.send(`Vous avez supprimé le rôle ${role} de ${taggedMember.user}`)
			);
	} else {
		const embed = new MessageEmbed()
			.setTitle('ERROR: ROLE_DOESNT_EXIST_ERROR')
			.setColor('#A80506')
			.setDescription(client.config.bot_messages['role_doesnt_exist'])
			.addField('Usage', `${settings.prefix}${command.help.name} ${command.help.usage}`);
		return message.reply(embed);
	}
}

async function loadLoveTest(channel, user1, user2, score) {
	const canva = createCanvas(550, 360);
	const ctx = canva.getContext('2d');
	const bg = await loadImage('./assets/img/love_background.jpg');
	const user1Avatar = await loadImage(user1.displayAvatarURL({ format: 'jpg', size: 128 }));
	const user2Avatar = await loadImage(user2.displayAvatarURL({ format: 'jpg', size: 128 }));

	ctx.drawImage(bg, 0, 0, canva.width, canva.height);
	ctx.drawImage(user1Avatar, 100, 100);
	ctx.drawImage(user2Avatar, 322, 100);

	ctx.fillStyle = '#e66767';
	ctx.globalAlpha = 1;
	ctx.font = '50px Arial';
	ctx.textAlign = 'center';

	ctx.fillText(`${score}%`, 275, 300);

	ctx.fillStyle = '#e66767';
	ctx.font = '60px Arial';
	ctx.fillText('LOVE TEST', 275, 70);

	const attachment = new MessageAttachment(canva.toBuffer(), 'lovetest.png');

	channel.send(attachment);
}

module.exports = {
	random,
	loadBar,
	clearChannel,
	getFromType,
	sendWallpaper,
	sendWallpaperByDevice,
	sendWallpaperByType,
	addRole,
	removeRole,
	loadLoveTest,
};
