const { createCanvas, loadImage } = require('canvas');
const { MessageAttachment } = require('discord.js');
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

module.exports = {
	random,
	sendBar,
	clearChannel,
};
