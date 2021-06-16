const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const { MESSAGES } = require('../../utils/consts');
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
const translate = require('@iamtraction/google-translate');

module.exports.run = (client, message, args) => {
	fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.nasa_key}`).then((res) =>
		res.json().then((data) => {
			translate(data.explanation, { to: 'fr' }).then((explanation) => {
				const embed = new MessageEmbed()
					.setTitle(`Astronomy Picture of the Day - ${data.title}`)
					.setImage(data.hdurl)
					.setTimestamp()
					.setDescription(explanation.text);
				message.channel.send(embed);
			});
		})
	);
};

module.exports.help = MESSAGES.COMMANDS.MISC.APOD;
