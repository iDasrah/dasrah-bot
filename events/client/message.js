const { MessageEmbed } = require('discord.js');

module.exports = async (client, message) => {
	const settings = await client.getGuild(message.guild);
	if (!message.content.startsWith(settings.prefix) || message.author.bot) return;

	const args = message.content.slice(settings.prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command =
		client.commands.get(commandName) ||
		client.commands.find((cmd) => cmd.help.aliases && cmd.help.aliases.includes(commandName));

	if (!command) return message.reply(client.config.bot_messages['invalid-command-error']);

	// si pas d'argument
	if (command.help.args[0] && !args.length) {
		const embed = new MessageEmbed()
			.setTitle('ERROR: NO-ARGUMENT-ERROR')
			.setColor('#A80506')
			.setDescription(client.config.bot_messages['no-argument-error'])
			.addField('Usage', `${settings.prefix}${command.help.name} ${command.help.usage}`);
		return message.reply(embed);
	}

	// si pas la permission
	if (!message.member.hasPermission(command.help.permission))
		return message.reply(client.config.bot_messages['no-permission-error']);

	// si trop d'arguments
	if (args.length > command.help.args[1])
		return message.reply(
			`${client.config.bot_messages['too-much-arguments-error']}\r\n\`${settings.prefix}${command.help.name} ${command.help.usage}\``
		);

	// si pas assez d'arguments
	if (args.length < command.help.args[1][0] && command.help.args[1][1] === 'strict')
		return message.reply(
			`${client.config.bot_messages['not-enough-arguments-error']}\r\n\`${settings.prefix}${command.help.name} ${command.help.usage}\``
		);

	try {
		command.run(client, message, args, settings);
	} catch (error) {
		console.error(error);
		message.reply(client.config.bot_messages['command-execution-error']);
	}
};
