const { createCanvas, loadImage } = require('canvas');
const { ROLES } = require('../../utils/consts');

module.exports = (client, member) => {
	const welcomeChannel = member.guild.channels.cache.get('840203319254188063');
	const role = member.guild.roles.cache.get(ROLES.ONJOIN);
	const guild = client.guilds.cache.get('825753614898167848');
	const roadToChannel = guild.channels.cache.get('851794676637630494');
	const discussChannel = guild.channels.cache.get('826673568930594816');
	const currentRoadTo = 50;

	welcomeChannel.send(`${member}, salut mec !`);
	member.roles.add(role);

	discussChannel.send(`Souhaitez tous la bienvenue à ${member}, s'il vous plait !`);

	// road to bar
	clearChannel(roadToChannel);
	sendBar(roadToChannel, guild);
};
