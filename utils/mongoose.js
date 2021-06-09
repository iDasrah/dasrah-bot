const mongoose = require('mongoose');
const { database_connect } = require('../json/config.json');

module.exports = {
	init: () => {
		const options = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
			autoIndex: false,
			poolSize: 10,
			serverSelectionTimeoutMS: 5000,
			socketTimeoutMS: 45000,
			family: 4,
		};

		mongoose.connect(database_connect, options);
		mongoose.Promise = global.Promise;
		mongoose.connection.on('connected', () => console.log('Connecté à MongoDB !'));
	},
};
