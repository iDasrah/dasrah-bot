const { MESSAGES } = require('../../utils/consts');
const fetch = require('node-fetch');
const { random, getPageCount, getCategory } = require('../../utils/functions');
const { MessageEmbed } = require('discord.js');
const translate = require('@iamtraction/google-translate');

module.exports.run = async (client, message, args) => {
	const embed = new MessageEmbed();

	if (!args.length) {
		const page = await getPageCount();

		fetch(`https://kitsu.io/api/edge/anime?page[offset]=${random(0, page)}`).then((res) =>
			res.json().then(async (anime) => {
				const data = anime.data[random(0, 9)];
				const attributes = data.attributes;
				const genres = await getCategory(data.id);

				translate(attributes.synopsis, { to: 'fr' }).then((synopsis) => {
					embed
						.setTitle(attributes.canonicalTitle)
						.setDescription(synopsis.text)
						.setImage(attributes.posterImage.original)
						.addFields(
							{ name: 'Commencé le', value: attributes.startDate, inline: true },
							{
								name: 'Terminé le',
								value: attributes.endDate,
								inline: true,
							},
							{
								name: "Nombre d'épisodes",
								value: attributes.episodeCount,
								inline: true,
							},
							{
								name: 'Genres',
								value: genres.join(', ') || 'Inconnu',
								inline: true,
							}
						);
					message.channel.send(embed);
				});
			})
		);
	} else {
		const type = args[0];
		const page = await getPageCount(type);
		console.log(page);

		fetch(
			`https://kitsu.io/api/edge/anime?filter[categories]=${type}&page[offset]=${random(0, page)}`
		).then((res) =>
			res.json().then(async (anime) => {
				const animeData = anime.data[random(0, 9)];
				console.log(animeData);
				const dataAttributes = animeData.attributes;
				const genres = await getCategory(animeData.id);

				translate(dataAttributes.synopsis, { to: 'fr' }).then((synopsis) => {
					embed
						.setTitle(dataAttributes.canonicalTitle)
						.setDescription(synopsis.text)
						.setImage(dataAttributes.posterImage.original)
						.addFields(
							{ name: 'Commencé le', value: dataAttributes.startDate, inline: true },
							{
								name: 'Terminé le',
								value: dataAttributes.endDate,
								inline: true,
							},
							{
								name: "Nombre d'épisodes",
								value: dataAttributes.episodeCount,
								inline: true,
							},
							{
								name: 'Genres',
								value: genres.join(', ') || 'Inconnu',
								inline: true,
							}
						);
					message.channel.send(embed);
				});
			})
		);
	}
};

module.exports.help = MESSAGES.COMMANDS.ANIME.ANIME;
