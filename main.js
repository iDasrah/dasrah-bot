'use strict';

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

// imports
const { Client, Collection } = require('discord.js');
const token = process.env.token; // token
const { loadCommands, loadEvents } = require('./utils/loader');

const client = new Client();
require('./utils/dbfunctions')(client);
client.mongoose = require('./utils/mongoose');
client.config = require('./config');

// collections
['commands'].forEach((collection) => (client[collection] = new Collection()));

loadCommands(client);
loadEvents(client);
client.mongoose.init();

client.login(token);
