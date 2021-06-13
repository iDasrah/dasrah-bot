const { User, Guild } = require('../models/index');
const mongoose = require('mongoose');

module.exports = (client) => {
	// GUILD

	client.createGuild = async (guild) => {
		const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, guild);
		const createGuild = await new Guild(merged);
		createGuild
			.save()
			.then((g) => console.log(`Nouveau serveur ajouté à la database -> ${g.guildName}`));
	};

	client.getGuild = async (guild) => {
		const data = await Guild.findOne({ guildID: guild.id });
		if (data) return data;
		return client.config.defaults;
	};

	client.updateGuild = async (guild, settings) => {
		let data = await client.getGuild(guild);
		if (typeof data !== 'object') data = {};
		for (const key in settings) {
			if (data[key] !== settings[key]) data[key] = settings[key];
		}
		return data.updateOne(settings);
	};

	// USER

	client.createUser = async (user) => {
		const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, user);
		const createUser = await new User(merged);
		createUser
			.save()
			.then((u) => console.log(`Nouvel utilisateur ajouté à la database -> ${u.userName}`));
	};

	client.getUser = async (user) => {
		const data = await User.findOne({ userID: user.id });
		if (data) return data;
		else return;
	};

	client.updateUser = async (user, settings) => {
		let data = await client.getUser(user);
		if (typeof data !== 'object') data = {};
		for (const key in settings) {
			if (data[key] !== settings[key]) data[key] = settings[key];
		}
		return data.updateOne(settings);
	};
};
