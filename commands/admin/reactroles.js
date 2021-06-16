const { MessageAttachment, MessageEmbed } = require('discord.js');
const { MESSAGES } = require('../../utils/consts');
const { emotes } = require('../../utils/emotes');
const { roles } = require('../../utils/roles');

module.exports.run = async (client, message, args) => {
	const roleList = roles(client);
	const emoteList = emotes(client);

	message.delete();

	await message.channel.send({ files: ['./assets/roles/profile.png'] });

	const profileEmbed = new MessageEmbed()
		.setColor('#CAF7E3')
		.setTimestamp()
		.setDescription('Choisissez le(s) rôle(s) qui vous correspond(ent) !')
		.addFields(
			{
				name: 'SEXE',
				value: `
      ${emoteList[0][0]} : ${roleList[0][0]}
      ${emoteList[0][1]} : ${roleList[0][1]}
      `,
				inline: true,
			},
			{
				name: 'AGE',
				value: `
				${emoteList[0][2]} : ${roleList[0][2]}
        ${emoteList[0][3]} : ${roleList[0][3]}`,
				inline: true,
			}
		);
	message.channel.send(profileEmbed).then(async (msg) => {
		for (emote of emoteList[0]) {
			await msg.react(emote);
		}
	});

	await message.channel.send({ files: ['./assets/roles/hobbies.png'] });

	const hobbiesEmbed = new MessageEmbed()
		.setColor('#F8EDED')
		.setTimestamp()
		.setDescription('Choisissez le(s) rôle(s) qui vous correspond(ent) !')
		.addField(
			'HOBBIES',
			`
      ${emoteList[1][0]} : ${roleList[1][0]}
      ${emoteList[1][1]} : ${roleList[1][1]}
			${emoteList[1][2]} : ${roleList[1][2]}
      ${emoteList[1][3]} : ${roleList[1][3]}
      `
		);

	message.channel.send(hobbiesEmbed).then(async (msg) => {
		for (emote of emoteList[1]) {
			await msg.react(emote);
		}
	});

	await message.channel.send({ files: ['./assets/roles/jeux.png'] });

	const gamesEmbed = new MessageEmbed()
		.setColor('#F6DFEB')
		.setTimestamp()
		.setDescription('Choisissez le(s) rôle(s) qui vous correspond(ent) !')
		.addFields(
			{
				name: 'JEUX',
				value: `
      ${emoteList[2][0]} : ${roleList[2][0]}
      ${emoteList[2][1]} : ${roleList[2][1]}
			${emoteList[2][2]} : ${roleList[2][2]}
      `,
				inline: true,
			},
			{
				name: 'PLATEFORME',
				value: `
			${emoteList[2][3]} : ${roleList[2][3]}
			${emoteList[2][4]} : ${roleList[2][4]}
			${emoteList[2][5]} : ${roleList[2][5]}
			${emoteList[2][6]} : ${roleList[2][6]}
			`,
				inline: true,
			}
		);

	message.channel.send(gamesEmbed).then(async (msg) => {
		for (emote of emoteList[2]) {
			await msg.react(emote);
		}
	});

	const rlRanksEmbed = new MessageEmbed()
		.setColor('#F6DFEB')
		.setTimestamp()
		.setDescription('Choisissez le(s) rôle(s) qui vous correspond(ent) !')
		.addField(
			'RL RANKS',
			`
      ${emoteList[3][0]} : ${roleList[3][0]}
      ${emoteList[3][1]} : ${roleList[3][1]}
			${emoteList[3][2]} : ${roleList[3][2]}
      ${emoteList[3][3]} : ${roleList[3][3]}
			${emoteList[3][4]} : ${roleList[3][4]}
			${emoteList[3][5]} : ${roleList[3][5]}
      ${emoteList[3][6]} : ${roleList[3][6]}
      ${emoteList[3][7]} : ${roleList[3][7]}
      `
		);

	message.channel.send(rlRanksEmbed).then(async (msg) => {
		for (emote of emoteList[3]) {
			await msg.react(emote);
		}
	});

	await message.channel.send({ files: ['./assets/roles/langages.png'] });

	const languagesEmbed = new MessageEmbed()
		.setColor('#F6DFEB')
		.setTimestamp()
		.setDescription('Choisissez le(s) rôle(s) qui vous correspond(ent) !')
		.addField(
			'LANGAGES',
			`
      ${emoteList[4][0]} : ${roleList[4][0]}
      ${emoteList[4][1]} : ${roleList[4][1]}
			${emoteList[4][2]} : ${roleList[4][2]}
      ${emoteList[4][3]} : ${roleList[4][3]}
			${emoteList[4][4]} : ${roleList[4][4]}
			${emoteList[4][5]} : ${roleList[4][5]}
      `
		);

	message.channel.send(languagesEmbed).then(async (msg) => {
		for (emote of emoteList[4]) {
			await msg.react(emote);
		}
	});
};

module.exports.help = MESSAGES.COMMANDS.ADMIN.REACTROLES;
