"use strict";

// imports
const { Client, Collection, MessageEmbed } = require('discord.js');
const { prefix, token, bot_messages, bot_info, roles } = require('./json/config.json');
const { readdirSync } = require('fs');

const client = new Client();
client.commands = new Collection();
const loadCommands = (dir = "./commands/") => {
	readdirSync(dir).forEach((dirs) => {
		const commandFiles = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith('.js'));

		for(const file of commandFiles) {
			const getFileName = require(`${dir}/${dirs}/${file}`);
			client.commands.set(getFileName.help.name, getFileName);
			console.log(`Commande chargée: ${getFileName.help.name}`)
		};
	});
};

loadCommands();

client.on('ready', () => {
	console.log(`${bot_info.name}: I'm ready !`);

	// status
	client.user.setPresence({
		activity: {
			name: `${prefix}help pour de l'aide`
		}
	})
});

// on member join
client.on('guildMemberAdd', (member) => {
	const channel = member.guild.channels.cache.get('840203319254188063');
	const role = member.guild.roles.cache.find((role) => role.name === roles['on-join']);
	if(!channel) return;
	channel.send(`${member}, salut mec !`);
	member.roles.add(role);
});

// on member quit
client.on('guildMemberRemove', (member) => {
	const channel = member.guild.channels.cache.get('840203319254188063');
	if(!channel) return;
	channel.send(`C'est ça, casse toi, ${member}.`)
});


// command handler
client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if(!client.commands.has(commandName)) return message.reply(bot_messages['invalid-command-error']);

	const command = client.commands.get(commandName);

	if(command.help.args && !args.length) {
		const embed = new MessageEmbed()
		.setTitle("ERROR: NO-ARGUMENT-ERROR")
		.setColor('#A80506')
		.setDescription(bot_messages['no-argument-error'])
		.addField('Usage', `${prefix}${command.help.name} ${command.help.usage}`);
		return message.reply(embed);
	}
	else if(!message.member.hasPermission(command.help.permission)) return message.reply(bot_messages['no-permission-error']);

	try {
		command.run(client, message, args);
	} catch(error) {
		console.error(error);
		message.reply(bot_messages['command-execution-error']);
	}
});

client.login(token);