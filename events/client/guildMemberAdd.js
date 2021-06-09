const { createCanvas, loadImage } = require('canvas');
const { ROLES, CHANNELS, GUILD } = require('../../utils/consts');
const { clearChannel, loadBar } = require('../../utils/functions');

module.exports = (client, member) => {
	const welcomeChannel = member.guild.channels.cache.get(CHANNELS.WELCOMECHANNEL);
	const role = member.guild.roles.cache.get(ROLES.ONJOIN);
	const guild = client.guilds.cache.get(GUILD.ID);
	const roadToChannel = guild.channels.cache.get(CHANNELS.ROADTOCHANNEL);
	const discussChannel = guild.channels.cache.get(CHANNELS.DISCUSSCHANNEL);
	const currentRoadTo = 50;

	welcomeChannel.send(`${member}, salut mec !`);
	member.roles.add(role);

	discussChannel.send(`Souhaitez tous la bienvenue à ${member}, s'il vous plait !`);

	// road to bar
	clearChannel(roadToChannel);
	loadBar(roadToChannel, guild);
};
