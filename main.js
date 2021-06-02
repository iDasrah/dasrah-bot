'use strict';

// imports
const { Client, Collection, MessageEmbed } = require('discord.js');
const { prefix, bot_messages, bot_info, roles, intervalMeme } = require('./json/config.json');
const { readdirSync } = require('fs');

const client = new Client();

// collections
['commands'].forEach((collection) => (client[collection] = new Collection()));

// chargement des scripts de commande
const loadCommands = (dir = './commands/') => {
	readdirSync(dir).forEach((dirs) => {
		const commandFiles = readdirSync(`${dir}/${dirs}/`).filter((files) => files.endsWith('.js'));

		for (const file of commandFiles) {
			const getFileName = require(`${dir}/${dirs}/${file}`);
			client.commands.set(getFileName.help.name, getFileName);
			console.log(`Commande chargée: ${getFileName.help.name}`);
		}
	});
};

// chargement des scripts d'evenements
const loadEvents = (dir = './events/') => {
	readdirSync(dir).forEach((dirs) => {
		const events = readdirSync(`${dir}/${dirs}/`).filter((files) => files.endsWith('.js'));

		for (const event of events) {
			const e = require(`${dir}/${dirs}/${event}`);
			const eventName = event.split('.')[0];
			client.on(eventName, e.bind(null, client));
		}
	});
};

loadCommands();
loadEvents();

client.login(process.env.token);
