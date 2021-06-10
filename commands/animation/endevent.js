const { MESSAGES, GUILD, EVENTS, CHANNELS } = require('../../utils/consts');

module.exports.run = (client, message, args) => {
	const guild = client.guilds.cache.get(GUILD.ID);
	const eventCategory = client.channels.cache.get(CHANNELS.EVENTCATEGORY);
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
};

module.exports.help = MESSAGES.COMMANDS.ANIMATION.ENDEVENTS;
