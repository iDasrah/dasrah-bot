const { createCanvas, loadImage } = require('canvas');
const { sendBar, clearChannel } = require('../../utils/functions');

module.exports = (client, member) => {
	// membre quitte
	const channel = member.guild.channels.cache.get('846288755480592435');
	const guild = client.guilds.cache.get('825753614898167848');
	const roadToChannel = guild.channels.cache.get('851794676637630494');
	const currentRoadTo = 50;

	if (!channel) return;
	channel.send(`Pourquoi t'es parti ${member} :(`);

	// road to bar
	clearChannel(roadToChannel);
	sendBar(roadToChannel, guild);
};
