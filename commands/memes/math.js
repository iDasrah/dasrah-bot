const { math } = require('../../json/memes.json');
const { MessageEmbed } = require('discord.js');
const { random } = require('../../utils/functions');
const { MESSAGES } = require('../../utils/consts');

module.exports.run = (client, message, args) => {
	const meme = math[random(0, math.length)].url;
	const embed = new MessageEmbed()
		.setColor('#FAF3E1')
		.setTitle('MATH MEME GENERATOR')
		.setTimestamp()
		.setImage();
	message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MEMES.MATH;
