const { loadBar, clearChannel } = require('../../utils/functions');
const { GUILD, CHANNELS } = require('../../utils/consts');

module.exports = (client, member) => {
	// membre quitte
	const quitChannel = member.guild.channels.cache.get(CHANNELS.QUITCHANNEL);
	const guild = client.guilds.cache.get(GUILD.ID);
	const roadToChannel = guild.channels.cache.get(CHANNELS.ROADTOCHANNEL);

	if (!quitChannel) return;
	quitChannel.send(`Pourquoi t'es parti ${member} :(`);

	// road to bar
	clearChannel(roadToChannel);
	loadBar(roadToChannel, guild);
};
