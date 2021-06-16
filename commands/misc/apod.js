const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const { MESSAGES } = require('../../utils/consts');
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
const translate = require('@iamtraction/google-translate');

module.exports.run = async (client, message, args) => {
	const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.nasa_key}`);
	const data = await res.json();
	const explanation = await translate(data.explanation, { to: 'fr' });
	const embed = new MessageEmbed()
		.setTitle(`Astronomy Picture of the Day - ${data.title}`)
		.setImage(data.hdurl)
		.setTimestamp()
		.setDescription(explanation.text);
	return message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MISC.APOD;
