const { emoteList } = require('../../utils/emotes');
const { roles } = require('../../utils/roles');

module.exports = (client, messageReaction, user) => {
	const message = messageReaction.message;
	const member = message.guild.members.cache.get(user.id);
	const emoji = messageReaction.emoji.name;
	const channel = message.guild.channels.cache.find((c) => c.id === '846459783674593371');

	const roleList = [].concat.apply([], roles(client));

	if (member.user.bot) return;
	if (emoteList.includes(emoji) && message.channel.id === channel.id) {
		for (let emote of emoteList) {
			if (emote === emoji) {
				const role = roleList[emoteList.indexOf(emote)];
				member.roles.remove(role);
				message.channel
					.send(`${member}, vous n'avez plus le rôle ${role.toString()}.`)
					.then((msg) => msg.delete({ timeout: 3000 }));
				break;
			}
		}
	}
};
