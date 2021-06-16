const { createCanvas, loadImage } = require('canvas');
const { MessageAttachment, MessageEmbed } = require('discord.js');
const { GUILD } = require('./consts');
const fetch = require('node-fetch');

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

async function loadRoadToBar(client, guild) {
	const canva = createCanvas(800, 500);
	const ctx = canva.getContext('2d');
	const bg = await loadImage('./assets/bgs/road_to.png');
	const guildInfo = await client.getGuild(guild);

	ctx.drawImage(bg, 0, 0, canva.width, canva.height);
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = '#63cdda';
	ctx.globalAlpha = 0.5;
	ctx.fillStyle = '#303952';
	ctx.fillRect(100, 225, 600, 50);
	ctx.globalAlpha = 1;
	ctx.strokeRect(100, 225, 600, 50);

	ctx.fillStyle = '#32ff7e';
	ctx.globalAlpha = 0.8;
	ctx.fillRect(100, 226, (100 / guildInfo.roadTo) * guild.memberCount * 6, 50);

	ctx.globalAlpha = 1;
	ctx.fillStyle = '#fff';

	ctx.font = '40px Arial';
	ctx.textAlign = 'center';
	ctx.fillText(`ROAD TO ${guildInfo.roadTo} MEMBRES !`, 400, 60);

	ctx.font = '30px Arial';
	ctx.textAlign = 'center';
	ctx.fillText(`${guild.memberCount} / ${guildInfo.roadTo}`, 400, 260);

	const attachment = new MessageAttachment(canva.toBuffer(), 'roadto.png');

	return attachment;
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

async function loadLoveTest(user1, user2, score) {
	const canva = createCanvas(550, 360);
	const ctx = canva.getContext('2d');
	const bg = await loadImage('');
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

	return attachment;
}

// TODO: LOAD XP BAR
async function loadXPBar(member, experience, level) {
	const canva = createCanvas(588, 188);
	const ctx = canva.getContext('2d');
	const bg = await loadImage('./assets/bgs/level.png');
	const userAvatar = await loadImage(member.displayAvatarURL({ size: 128, format: 'jpg' }));

	ctx.drawImage(bg, 0, 0, canva.width, canva.height);
	ctx.drawImage(userAvatar, 30, 30);

	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.fillStyle = '#d0d4f9';
	ctx.strokeStyle = '#CAF7E3';
	ctx.globalAlpha = 0.6;
	ctx.fillRect(188, 84, 370, 20);
	ctx.globalAlpha = 1;
	ctx.strokeRect(188, 84, 370, 20);

	ctx.fillStyle = '#c0eade';
	ctx.globalAlpha = 0.8;
	ctx.fillRect(189, 84, (100 / (level * 30)) * experience * 3.7, 20);

	ctx.font = '16px Arial';
	ctx.fillStyle = '#fff';
	ctx.globalAlpha = 1;
	ctx.textAlign = 'start';
	ctx.fillText(`XP: ${experience} / ${level * 30}`, 188, 78);
	ctx.textAlign = 'end';
	ctx.fillText(`LEVEL ${level}`, 558, 120);

	const attachment = new MessageAttachment(canva.toBuffer(), 'level.png');

	return attachment;
}

async function isReached(guild, client, channel) {
	const guildInfo = client.getGuild(guild);
	const guildRoadTo = guildInfo.roadTo;

	if (guild.memberCount >= guildRoadTo) {
		client.updateGuild(guild, { roadTo: guildRoadTo * 2 });
		channel.send(`L'OBJECTIF A ETE ATTEINT !!!! :partying_face:`);
		const attachment = loadRoadToBar(client, guild);
		channel.send(attachment);
		return true;
	} else return false;
}

function getPageCount(category = '') {
	if (!category) {
		const page = fetch('https://kitsu.io/api/edge/anime').then((res) =>
			res.json().then((answer) => {
				return answer.meta.count;
			})
		);

		return page;
	}

	const page = fetch(`https://kitsu.io/api/edge/anime?filter[categories]=${category}`).then((res) =>
		res.json().then((answer) => {
			return answer.meta.count;
		})
	);

	return page;
}

function getCategory(id) {
	const result = fetch(`https://kitsu.io/api/edge/anime/${id}/categories`).then((res) =>
		res.json().then((category) => {
			const categoryData = category.data;
			let categories = [];

			for (const categorie of categoryData) {
				categories.push(categorie.attributes.title);
			}
			return categories;
		})
	);
	return result;
}

module.exports = {
	random,
	loadRoadToBar,
	clearChannel,
	getFromType,
	sendWallpaper,
	sendWallpaperByDevice,
	sendWallpaperByType,
	addRole,
	removeRole,
	loadLoveTest,
	isReached,
	loadXPBar,
	getPageCount,
	getCategory,
};
