'use strict';

// imports
const { Client, Collection } = require('discord.js');
const token = process.env.token || 'ODI1NzU0OTEwMDExODE3OTg0.YGCiMA.WV84IEyZnOSDtZn4Mqqk_h6Fk1g';
const { loadCommands, loadEvents } = require('./utils/loader');

const client = new Client();
client.mongoose = require('./utils/mongoose');

// collections
['commands'].forEach((collection) => (client[collection] = new Collection()));

loadCommands(client);
loadEvents(client);
client.mongoose.init();

client.login(token);
