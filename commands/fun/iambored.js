const { MESSAGES } = require('../../utils/consts');
const fetch = require('node-fetch');
const translate = require('@iamtraction/google-translate');

module.exports.run = async (client, message, args) => {
	const res = await fetch('http://www.boredapi.com/api/activity/');
	const data = await res.json();
	const activity = await translate(data.activity, { to: 'fr' });
	message.reply(activity.text.toLowerCase());
};

module.exports.help = MESSAGES.COMMANDS.FUN.IAMBORED;
