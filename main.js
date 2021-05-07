// imports
const Discord = require('discord.js');
const fs = require('fs');
const { prefix, token, messages, bot_info } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.on('ready', () => {
	console.log(`${bot_info.name}: I'm ready !`);

	// status
	client.user.setPresence({
		activity: {
			name: `${prefix}help pour de l'aide`
		}
	})

});

for(const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// command handler
client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if(!client.commands.has(commandName)) return message.reply(messages['invalid-command-error']);

	const command = client.commands.get(commandName);

	try {
		command.execute(message, args);
	} catch(error) {
		console.error(error);
		message.reply(messages['command-execution-error']);
	}
});


client.login(process.env.token);