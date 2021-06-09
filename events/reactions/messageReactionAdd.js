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
				member.roles.add(role);
				message.channel
					.send(`${member}, vous avez reçu le rôle ${role.toString()}.`)
					.then((msg) => msg.delete({ timeout: 3000 }));
				break;
			}
		}
	}

	if (
		!(member.roles.cache.has('851718162738315295') && member.roles.cache.has('851718367050989609'))
	) {
		member.roles.add(headerprofile);
		member.roles.add(footerprofile);
	}
};
