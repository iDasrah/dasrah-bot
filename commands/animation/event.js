const { MESSAGES, GUILD, EVENTS, CHANNELS } = require('../../utils/consts');

module.exports.run = (client, message, args) => {
	const guild = client.guilds.cache.get(GUILD.ID);
	const eventCategory = client.channels.cache.get(CHANNELS.EVENTCATEGORY);
	const eventAnnouncements = client.channels.cache.get('852670487691001876');
	const eventName = args.join(' ');

	for (const event in EVENTS) {
		if (eventName === EVENTS[event]['name']) {
			guild.channels.create(EVENTS[event]['channel'], { type: 'voice', parent: eventCategory });

			let actives;

			try {
				actives = client.events.get(eventName).actives;
			} catch {
				actives = 0;
			}

			if (!actives) client.events.set(eventName, { actives: 1 });
			else client.events.set(eventName, { actives: actives + 1 });
		}
	}
	return eventAnnouncements.send(`@everyone L'évènement ${eventName} a commencé ! Passe faire un tour.`);
};

module.exports.help = MESSAGES.COMMANDS.ANIMATION.EVENT;
