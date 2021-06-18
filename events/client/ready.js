const { loadRoadToBar, isReached } = require('../../utils/functions');
const { GUILD, CHANNELS } = require('../../utils/consts');

module.exports = async (client) => {
	const guild = client.guilds.cache.get(GUILD.ID);
	const roleChannel = guild.channels.cache.get(CHANNELS.ROLECHANNEL);
	const roadToChannel = guild.channels.cache.get(CHANNELS.ROADTOCHANNEL);

	const settings = await client.getGuild(guild);

	const members = guild.members.cache;

	members.forEach(async (member) => {
		if (member.user.bot) return;
		else if (!(await client.getUser(member))) {
			const newMember = {
				guildID: member.guild.id,
				guildName: member.guild.name,
				userID: member.id,
				userName: member.user.username,
			};
			await client.createUser(newMember);
		}
	});

	// load all messages of role & roadto channel
	await roleChannel.messages.fetch();
	await roadToChannel.messages.fetch();

	// road to bar
	const attachment = await loadRoadToBar(client, guild);
	if (roadToChannel.lastMessage) {
		roadToChannel.lastMessage.edit(attachment);
	} else {
		roadToChannel.send(attachment);
	}
	isReached(guild, client, roadToChannel);

	// confirmations
	console.log(`${client.config.bot_info.name}: Je suis prête !`);

	// status
	client.user.setPresence({
		activity: {
			name: `${settings.prefix}help pour de l'aide.`,
		},
	});
};
