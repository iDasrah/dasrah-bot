const { answers } = require('../../json/8ball.json');
const { random } = require('../../utils/functions');
const { MESSAGES } = require('../../utils/consts');

module.exports.run = (client, message, args) => {
	const question = args.slice(0).join(' ');
	const answer = answers[random(0, answers.length)];
	message.reply(answer.toLowerCase());
};

module.exports.help = MESSAGES.COMMANDS.GAMES.BALL;
