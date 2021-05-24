"use strict";

// imports
const { Client, Collection, MessageEmbed } = require('discord.js');
const { prefix, token, bot_messages, bot_info, roles, intervalMeme } = require('./json/config.json');
const { readdirSync } = require('fs');

const client = new Client();

// collections
["commands"].forEach(collection => client[collection] = new Collection());
let memes = [];

// chargement des scripts de commande
const loadCommands = (dir = "./commands/") => {
	readdirSync(dir).forEach((dirs) => {
		const commandFiles = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith('.js'));

		for(const file of commandFiles) {
			const getFileName = require(`${dir}/${dirs}/${file}`);
			client.commands.set(getFileName.help.name, getFileName);
			console.log(`Commande chargée: ${getFileName.help.name}`);
		};
	});
};

const memeFiles = readdirSync('./json').filter(file => file.includes('maths') || file.includes('shrek'));

for(const memeFile of memeFiles) {
	const file = require(`./json/${memeFile}`);
	file.memes.forEach(meme => memes.push(meme.url));
}

loadCommands();

// quand le bot s'allume
client.on('ready', () => {
	console.log(`${memes.length} memes chargés !`);
	console.log(`${bot_info.name}: I'm ready !`);

	// status
	client.user.setPresence({
		activity: {
			name: `${prefix}help pour de l'aide.`
		}
	});

	// meme intervalle
	const memeInterval = intervalMeme * 60 * 1000;
	client.setInterval(() => {
		console.log('Sent a meme!')
		const channel = client.channels.cache.get('845273490764333057');
		const embed = new MessageEmbed()
		.setColor('#FE2EE4')
		.setTitle('RANDOM MEME GENERATOR')
		.setTimestamp()
		.setImage(memes[Math.floor(Math.random() * memes.length)]);
		channel.send(embed);
	}, memeInterval);

});

// nouveau membre
client.on('guildMemberAdd', (member) => {
	const channel = member.guild.channels.cache.get('840203319254188063');
	const role = member.guild.roles.cache.find((role) => role.name === roles['on-join']);
	if(!channel) return;
	channel.send(`${member}, salut mec !`);
	member.roles.add(role);
});

// membre quitte
client.on('guildMemberRemove', (member) => {
	const channel = member.guild.channels.cache.get('846288755480592435');
	if(!channel) return;
	channel.send(`Pourquoi t'es parti ${member} :(`)
});


// command handler
client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if(!client.commands.has(commandName)) return message.reply(bot_messages['invalid-command-error']);

	const command = client.commands.get(commandName);

	// si pas d'argument
	if(command.help.args[0] && !args.length) {
		const embed = new MessageEmbed()
		.setTitle("ERROR: NO-ARGUMENT-ERROR")
		.setColor('#A80506')
		.setDescription(bot_messages['no-argument-error'])
		.addField('Usage', `${prefix}${command.help.name} ${command.help.usage}`);
		return message.reply(embed);
	}
	// si pas la permission
	else if(!message.member.hasPermission(command.help.permission)) return message.reply(bot_messages['no-permission-error']);

	// si trop d'arguments
	else if(args.length > command.help.args[1]) return message.reply(`${bot_messages['too-much-arguments-error']}\r\n\`${prefix}${command.help.name} ${command.help.usage}\``);

	// si pas assez d'arguments
	else if(args.length < command.help.args[1][0] && command.help.args[1][1] === 'strict') return message.reply(`${bot_messages['not-enough-arguments-error']}\r\n\`${prefix}${command.help.name} ${command.help.usage}\``)

	try {
		command.run(client, message, args);
	} catch(error) {
		console.error(error);
		message.reply(bot_messages['command-execution-error']);
	}
});

client.login(token);