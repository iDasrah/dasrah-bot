// imports
const { Client, Collection } = require('discord.js');
const { prefix, token, messages, bot_info, roles } = require('./json/config.json');
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

// on member join
client.on('guildMemberAdd', (member) => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'portail');
	const role = message.guild.roles.cache.find(role => role.name === roles['on-join']);
	if(!channel) return;
	channel.send(`Salut mec ! ${member}`);
	member.roles.add(role);
});

// on member quit
client.on('guildMemberRemove', (member) => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'portail');
	if(!channel) return;
	channel.send(`C'est ça, casse toi, ${member}.`)
});


// command handler
client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if(!client.commands.has(commandName)) return message.reply(messages['invalid-command-error']);

	const command = client.commands.get(commandName);

	try {
		command.run(client, message, args);
	} catch(error) {
		console.error(error);
		message.reply(messages['command-execution-error']);
	}
});

client.on('ready', () => {
	console.log(`${bot_info.name}: I'm ready !`);

	// status
	client.user.setPresence({
		activity: {
			name: `${prefix}help pour de l'aide`
		}
	})
});
client.login(token);