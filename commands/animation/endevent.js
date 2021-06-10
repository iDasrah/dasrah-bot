const { MESSAGES, GUILD, EVENTS, CHANNELS } = require('../../utils/consts');

module.exports.run = (client, message, args) => {
	const guild = client.guilds.cache.get(GUILD.ID);
	const eventCategory = client.channels.cache.get(CHANNELS.EVENTCATEGORY);
	const eventAnnouncements = client.channels.cache.get('852670487691001876');
	const eventName = args.join(' ');

	for (const event in EVENTS) {
		if (eventName === EVENTS[event]['name']) {
			if (!client.events.get(eventName))
				return message.reply(client.config.bot_messages['no_event_active']);
			const eventChannels = eventCategory.children.filter((channel) =>
				channel.name.includes(EVENTS[event]['channel'])
			);

			eventChannels.forEach((ch) => ch.delete());

			client.events.delete(eventName);
		}
	}
	return eventAnnouncements.send(`@everyone L'évènement ${eventName} est terminé ! Merci à tous d'avoir participé, à la prochaine :).`);
};

module.exports.help = MESSAGES.COMMANDS.ANIMATION.ENDEVENTS;
