const { shrek } = require('../../json/memes.json');
const { MessageEmbed } = require('discord.js');
const { random } = require('../../utils/functions');
const { MESSAGES } = require('../../utils/consts');

module.exports.run = (client, message, args) => {
	const embed = new MessageEmbed()
		.setColor('#41B64C')
		.setTitle('SHREK MEME GENERATOR')
		.setTimestamp()
		.setImage(shrek[random(0, shrek.length)].url);
	message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MEMES.SHREK;
