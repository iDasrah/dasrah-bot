const { prefix, bot_messages } = require('../../json/config.json');
const { MessageEmbed } = require('discord.js');

module.exports = (client, message) => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));

	if(!command) return message.reply(bot_messages['invalid-command-error']);

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
}