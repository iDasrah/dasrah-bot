module.exports.run = (client, message, args) => {
	message.channel.send("Pong!");
};

module.exports.help = {
	name: 'ping',
	description: 'Envoie Pong!',
	args: [false, [0, '']],
	category: 'general',
	usage: '',
	aliases: []
};