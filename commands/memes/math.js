const { math } = require('../../json/memes.json');
const { MessageEmbed } = require('discord.js');
const { random } = require('../../utils/functions');
const { MESSAGES } = require('../../utils/consts');

module.exports.run = (client, message, args) => {
	const embed = new MessageEmbed()
		.setColor('#FE2EE4')
		.setTitle('MATH MEME GENERATOR')
		.setTimestamp()
		.setImage(math[random(0, math.length)].url);
	message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MEMES.MATH;
