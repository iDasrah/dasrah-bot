const { MESSAGES } = require('../../utils/consts');
const { addRole, removeRole } = require('../../utils/functions');

module.exports.run = (client, message, args) => {
	message.delete();
	const action = args[0];
	const taggedMember = message.mentions.members.first();
	let roleArgs = args.splice(2);

	if (!taggedMember) return message.reply(client.config.bot_messages['no-user-tagged']);

	if (action === 'add') {
		roleArgs = roleArgs.join(' ');
		const role = message.guild.roles.cache.find((role) => role.name === roleArgs);
		addRole(taggedMember, role, message);
	} else if (action === 'remove') {
		roleArgs = roleArgs.join(' ');
		const role = message.guild.roles.cache.find((role) => role.name === roleArgs);
		removeRole(taggedMember, role, message);
	} else if (action === 'adds') {
		args = args.slice(2);
		args.forEach((arg) => {
			const role = message.guild.roles.cache.find((role) => role.name === arg.toString());
			addRole(taggedMember, role, message);
		});
	} else if (action === 'removes') {
		args = args.slice(2);
		args.forEach((arg) => {
			const role = message.guild.roles.cache.find((role) => role.name === arg.toString());
			removeRole(taggedMember, role, message);
		});
	}
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.ROLE;
