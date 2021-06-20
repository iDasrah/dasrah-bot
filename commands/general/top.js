const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require('../../utils/consts');
const { getMembersInDb } = require('../../utils/functions');

module.exports.run = async (client, message, args) => {
	const members = await getMembersInDb(client, message.guild);
	const membersLevels = new Map();

	members.forEach((member) => {
		membersLevels.set(member.userName, member.level);
	});

	const top = new Map([...membersLevels.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10));
	const topMembers = [];
	let topLevels = [];
	for (let [key, value] of top.entries()) {
		topMembers.push(key);
		topLevels.push(value);
	}

	const embed = new MessageEmbed()
		.setTitle('CLASSEMENT DES NIVEAUX')
		.setTimestamp()
		.addFields(
			{
				name: 'Pseudo',
				value: `
    ${topMembers[0]}
    ${topMembers[1]}
    ${topMembers[2]}
    ${topMembers[3]}
    ${topMembers[4]}
    ${topMembers[5]}
    ${topMembers[6]}
    ${topMembers[7]}
    ${topMembers[8]}
    ${topMembers[9]}
    `,
				inline: true,
			},
			{
				name: 'Niveau',
				value: `
      ${topLevels[0]}
      ${topLevels[1]}
      ${topLevels[2]}
      ${topLevels[3]}
      ${topLevels[4]}
      ${topLevels[5]}
      ${topLevels[6]}
      ${topLevels[7]}
      ${topLevels[8]}
      ${topLevels[9]}
      `,
				inline: true,
			}
		);

	return message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.GENERAL.TOP;
