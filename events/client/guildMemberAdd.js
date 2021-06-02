const { roles } = require('../../json/config.json');

module.exports = (client, member) => {
	const channel = member.guild.channels.cache.get('840203319254188063');
	const role = member.guild.roles.cache.find((role) => role.name === roles['on-join']);
	if (!channel) return;
	channel.send(`${member}, salut mec !`);
	member.roles.add(role);
};
