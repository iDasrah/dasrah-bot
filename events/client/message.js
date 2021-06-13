const { MessageEmbed } = require('discord.js');

module.exports = async (client, message) => {
	const settings = await client.getGuild(message.guild);

	if (!message.content.startsWith(settings.prefix) || message.author.bot) return;

	const args = message.content.slice(settings.prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command =
		client.commands.get(commandName) ||
		client.commands.find((cmd) => cmd.help.aliases && cmd.help.aliases.includes(commandName));

	if (!command) return message.reply(client.config.bot_messages['invalid_command_error']);

	// si pas d'argument
	if (command.help.args[0] && !args.length) {
		const embed = new MessageEmbed()
			.setTitle('ERROR: NO_ARGUMENT_ERROR')
			.setColor('#A80506')
			.setDescription(client.config.bot_messages['no_argument_error'])
			.addField('Usage', `${settings.prefix}${command.help.name} ${command.help.usage}`);
		return message.reply(embed);
	}

	// si pas la permission
	if (!message.member.hasPermission(command.help.permission)) {
		const embed = new MessageEmbed()
			.setTitle('ERROR: NO_PERMISSION_ERROR')
			.setColor('#A80506')
			.setDescription(client.config.bot_messages['no_permission_error'])
			.addField('Usage', `${settings.prefix}${command.help.name} ${command.help.usage}`);
		return message.reply(embed);
	}

	// si trop d'arguments
	if (args.length > command.help.args[1]) {
		const embed = new MessageEmbed()
			.setTitle('ERROR: TOO_MUCH_ARGUMENTS_ERROR')
			.setColor('#A80506')
			.setDescription(client.config.bot_messages['too_much_arguments_error'])
			.addField('Usage', `${settings.prefix}${command.help.name} ${command.help.usage}`);
		return message.reply(embed);
	}

	// si pas assez d'arguments
	if (args.length < command.help.args[1][0] && command.help.args[1][1] === 'strict') {
		const embed = new MessageEmbed()
			.setTitle('ERROR: NOT_ENOUGH_ARGUMENTS_ERROR')
			.setColor('#A80506')
			.setDescription(client.config.bot_messages['not_enough_arguments_error'])
			.addField('Usage', `${settings.prefix}${command.help.name} ${command.help.usage}`);
		return message.reply(embed);
	}

	try {
		command.run(client, message, args, settings);
	} catch (error) {
		console.error(error);
		const embed = new MessageEmbed()
			.setTitle('ERROR: COMMAND_EXECUTION_ERROR')
			.setColor('#A80506')
			.setDescription(client.config.bot_messages['command_execution_error'])
			.addField('Usage', `${settings.prefix}${command.help.name} ${command.help.usage}`);
		return message.reply(embed);
	}
};
