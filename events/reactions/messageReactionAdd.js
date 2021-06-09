const { emoteList } = require('../../utils/emotes');
const { roles, profile } = require('../../utils/roles');

module.exports = (client, messageReaction, user) => {
	const message = messageReaction.message;
	const member = message.guild.members.cache.get(user.id);
	const emoji = messageReaction.emoji.name;
	const channel = message.guild.channels.cache.find((c) => c.id === '846459783674593371');

	const roleList = [].concat.apply([], roles(client));
	const profileRoles = profile(client);

	if (member.user.bot) return;
	if (emoteList.includes(emoji) && message.channel.id === channel.id) {
		for (let emote of emoteList) {
			if (emote === emoji) {
				const role = roleList[emoteList.indexOf(emote)];
				member.roles.add(role);
				break;
			}
		}
	}

	if (
		!(member.roles.cache.has('851718162738315295') && member.roles.cache.has('851718367050989609'))
	) {
		member.roles.add(profileRoles[0]);
		member.roles.add(profileRoles[1]);
	}
};
