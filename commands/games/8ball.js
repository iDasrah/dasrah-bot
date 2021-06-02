const { answers } = require('../../json/8ball.json');
const { random } = require('../../exports');

module.exports.run = (client, message, args) => {
	const question = args.slice(0).join(' ');
	const answer = answers[random(0, answers.length)];
	message.reply(answer.toLowerCase());
};

module.exports.help = {
	name: '8ball',
	description: 'Posez une question !',
	args: [true, [100, '']],
	usage: '<question>',
	category: 'games',
	aliases: ['8b'],
};
