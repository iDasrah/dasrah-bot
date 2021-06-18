const { shrek } = require('../../json/memes.json');
const { MessageEmbed } = require('discord.js');
const { random } = require('../../utils/functions');
const { MESSAGES } = require('../../utils/consts');

module.exports.run = (client, message, args) => {
	const meme = shrek[random(0, shrek.length)].url;
	const embed = new MessageEmbed()
		.setColor('#70CAB0')
		.setTitle('SHREK MEME GENERATOR')
		.setTimestamp()
		.setImage(meme);
	message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MEMES.SHREK;
