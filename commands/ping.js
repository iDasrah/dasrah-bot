module.exports = {
	name: 'ping',
	description: 'Retourne "Pong!"',
	args: false,
	execute(message, args) {
		message.channel.send('Pong!');
	},
};