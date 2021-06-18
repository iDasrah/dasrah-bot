if (process.env.NODE_ENV !== 'production') require('dotenv').config();

module.exports.run = (client, message, args) => {
	const client_id = process.env.spotify_client_id;
	const client_secret = process.env.spotify_client_secret;
	const redirect_uri = process.env.spotify_redirect_uri;

	message.author
		.createDM()
		.then((dm) =>
			dm.send(
				`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&scope=user-top-read&state=34fFs29kd09`
			)
		);
};

module.exports.help = {
	name: 'spotistats',
	description: 'Renvoie vos stats spotify',
	args: [false, [1, '']],
	usage: '[membre]',
	category: 'misc',
	aliases: ['sstats'],
	tag: false,
	permission: '',
};
