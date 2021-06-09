const { MESSAGES } = require('../../utils/consts');

module.exports.run = async (client, message, args, settings) => {
	const key = args[0];
	const value = args.slice(1).join(' ');

	switch (key) {
		case 'prefix':
			if (value) {
				await client.updateGuild(message.guild, { prefix: value });
				client.user.setPresence({
					activity: {
						name: `${value}help pour de l'aide.`,
					},
				});
				return message.channel.send(`Prefix mis à jour: \`${value}\``);
			} else message.channel.send(`Le prefix actuel est \`${settings.prefix}\`.`);
	}
};

module.exports.help = MESSAGES.COMMANDS.ADMIN.CONFIG;
