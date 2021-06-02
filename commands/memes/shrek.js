const { shrek } = require('../../json/memes.json');
const { MessageEmbed } = require('discord.js');

function random(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

module.exports.run = (client, message, args) => {
	const embed = new MessageEmbed()
		.setColor('#41B64C')
		.setTitle('SHREK MEME GENERATOR')
		.setTimestamp()
		.setImage(shrek[random(0, shrek.length)].url);
	message.channel.send(embed);
};

module.exports.help = {
	name: 'shrek',
	description: 'Génère un meme aléatoire de shrek',
	args: [false, [0, '']],
	category: 'memes',
	usage: '',
	aliases: [],
};
