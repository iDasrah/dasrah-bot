const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require('../../utils/consts');

module.exports.run = (client, message, args) => {
	const guild = message.guild;
	const emotesCache = guild.emojis.cache;

	const emotes = [emotesCache.get('853714803062734878'), emotesCache.get('853714802446303233')];

	const question = args.join(' ');
	const embed = new MessageEmbed()
		.setAuthor(message.author.username)
		.setTitle('SONDAGE')
		.setColor('#a2f79f')
		.addField('QUESTION', question)
		.setTimestamp();

	message.channel.send(embed).then(async (msg) => {
		for (let emote of emotes) {
			await msg.react(emote);
		}
	});
};

module.exports.help = MESSAGES.COMMANDS.ANIMATION.SURVEY;
