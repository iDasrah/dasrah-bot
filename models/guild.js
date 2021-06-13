const mongoose = require('mongoose');
const { defaults } = require('../config');

const guildSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	guildID: String,
	guildName: String,
	prefix: {
		type: String,
		default: defaults.prefix,
	},
	roadTo: {
		type: Number,
		default: 50,
	},
});

module.exports = mongoose.model('Guild', guildSchema);
