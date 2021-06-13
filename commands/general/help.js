const { MessageEmbed } = require('discord.js');
const { readdirSync } = require('fs');
const { MESSAGES } = require('../../utils/consts');
const categoryList = readdirSync('./commands');

module.exports.run = (client, message, args, settings) => {
	const commandArg = args[0];

	if (!args.length) {
		const embed = new MessageEmbed()
			.setColor('#36394F')
			.addField(
				'HELP',
				`Liste des commandes\r\nPour plus d'infos sur une commande, tapez ${settings.prefix}${exports.help.name} [commande]`
			);

		for (const category of categoryList) {
			embed.addField(
				`${category}`,
				`${client.commands
					.filter((cat) => cat.help.category === category)
					.map((cmd) => cmd.help.name)
					.join('\r\n')}`
			);
		}
		return message.channel.send(embed);
	} else {
		const command = client.commands.get(commandArg);
		if (!command) {
			const embed = new MessageEmbed()
				.setTitle('ERROR: HELP_INVALID_COMMAND_ERROR')
				.setColor('#A80506')
				.setDescription(client.config.bot_messages['help_invalid_command'])
				.addField('Usage', `${settings.prefix}${command.help.name} ${command.help.usage}`);
			return message.reply(embed);
		}
		const embed = new MessageEmbed()
			.setColor('#D0D4F9')
			.setTitle(`HELP: ${command.help.name}`)
			.addField(`Description`, `${command.help.description}`)
			.addField(`Utilisation`, `${settings.prefix}${command.help.name} ${command.help.usage}`);

		if (command.help.aliases.length)
			embed.addField('Aliases', `${command.help.aliases.join(', ')}`, true);
		return message.channel.send(embed);
	}
};

module.exports.help = MESSAGES.COMMANDS.GENERAL.HELP;
