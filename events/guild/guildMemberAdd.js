const { ROLES, CHANNELS, GUILD } = require('../../utils/consts');
const { clearChannel, loadRoadToBar } = require('../../utils/functions');

module.exports = async (client, member) => {
	const newMember = {
		guildID: member.guild.id,
		guildName: member.guild.name,
		userID: member.id,
		userName: member.user.username,
	};

	await client.createUser(newMember);

	const welcomeChannel = member.guild.channels.cache.get(CHANNELS.WELCOMECHANNEL);
	const role = member.guild.roles.cache.get(ROLES.ONJOIN);
	const guild = client.guilds.cache.get(GUILD.ID);
	const roadToChannel = guild.channels.cache.get(CHANNELS.ROADTOCHANNEL);
	const discussChannel = guild.channels.cache.get(CHANNELS.DISCUSSCHANNEL);

	welcomeChannel.send(`${member}, salut mec !`);
	member.roles.add(role);

	discussChannel.send(`Souhaitez tous la bienvenue à ${member}, s'il vous plait !`);

	// road to bar
	const attachment = await loadRoadToBar(client, guild);
	if (await roadToChannel.lastMessage.attachments) {
		roadToChannel.lastMessage.edit(attachment);
	} else {
		roadToChannel.send(attachment);
	}
};
