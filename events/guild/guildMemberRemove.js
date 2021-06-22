const { loadRoadToBar } = require('../../utils/functions');
const { GUILD, CHANNELS } = require('../../utils/consts');

module.exports = async (client, member) => {
	// membre quitte
	const quitChannel = member.guild.channels.cache.get(CHANNELS.QUITCHANNEL);
	const guild = client.guilds.cache.get(GUILD.ID);
	const roadToChannel = guild.channels.cache.get(CHANNELS.ROADTOCHANNEL);

	if (!quitChannel) return;
	quitChannel.send(`Pourquoi t'es parti ${member} :(`);

	// road to bar
	const attachment = await loadRoadToBar(client, guild);
	if (await roadToChannel.lastMessage.attachments) {
		roadToChannel.lastMessage.edit(attachment);
	} else {
		roadToChannel.send(attachment);
	}
};
