const mongoose = require('mongoose');
const { defaults } = require('../json/config.json');

const guildSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	guildID: String,
	guildName: String,
	prefix: {
		type: String,
		default: defaults.prefix,
	},
});

module.exports = mongoose.model('Guild', guildSchema);
