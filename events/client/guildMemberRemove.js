module.exports = (client, member) => {
	// membre quitte
	const channel = member.guild.channels.cache.get('846288755480592435');
	if (!channel) return;
	channel.send(`Pourquoi t'es parti ${member} :(`);
};
