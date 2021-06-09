const { readdirSync } = require('fs');

// chargement des scripts de commande
const loadCommands = (client, dir = './commands/') => {
	readdirSync(dir).forEach((dirs) => {
		const commandFiles = readdirSync(`${dir}/${dirs}/`).filter((files) => files.endsWith('.js'));

		for (const file of commandFiles) {
			const getFileName = require(`../${dir}/${dirs}/${file}`);
			client.commands.set(getFileName.help.name, getFileName);
			console.log(`Commande chargée: ${getFileName.help.name}`);
		}
	});
};

// chargement des scripts d'evenements
const loadEvents = (client, dir = './events/') => {
	readdirSync(dir).forEach((dirs) => {
		const events = readdirSync(`${dir}/${dirs}/`).filter((files) => files.endsWith('.js'));

		for (const event of events) {
			const e = require(`../${dir}/${dirs}/${event}`);
			const eventName = event.split('.')[0];
			client.on(eventName, e.bind(null, client));
		}
	});
};

module.exports = {
	loadCommands,
	loadEvents,
};
