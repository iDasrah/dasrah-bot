const { MESSAGES } = require('../../utils/consts');
const fetch = require('node-fetch');
const { random, getPageCount, getCategory } = require('../../utils/functions');
const { MessageEmbed } = require('discord.js');
const translate = require('@iamtraction/google-translate');

module.exports.run = async (client, message, args) => {
	if (!args.length) {
		const page = await getPageCount();
		const res = await fetch(`https://kitsu.io/api/edge/anime?page[offset]=${random(0, page)}`);
		const anime = await res.json();
		const data = anime.data[random(0, 9)];
		const attributes = data.attributes;
		const genres = await getCategory(data.id);
		const synopsis = await translate(attributes.synopsis, { to: 'fr' });
		const embed = new MessageEmbed()
			.setTitle(attributes.canonicalTitle)
			.setDescription(synopsis.text)
			.setImage(attributes.posterImage.original)
			.addFields(
				{
					name: 'Commencé le',
					value: attributes.startDate,
					inline: true,
				},
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
	} else {
		const type = args[0];
		const page = await getPageCount(type);
		const res = await fetch(
			`https://kitsu.io/api/edge/anime?filter[categories]=${type}&page[offset]=${random(0, page)}`
		);
		const anime = await res.json();
		const data = anime.data[random(0, 9)];
		const attributes = data.attributes;
		const genres = await getCategory(data.id);
		const synopsis = await translate(attributes.synopsis, { to: 'fr' });
		const embed = new MessageEmbed()
			.setTitle(attributes.canonicalTitle)
			.setDescription(synopsis.text)
			.setImage(attributes.posterImage.original)
			.addFields(
				{
					name: 'Commencé le',
					value: attributes.startDate || 'Inconnu',
					inline: true,
				},
				{
					name: 'Terminé le',
					value: attributes.endDate || 'Inconnu',
					inline: true,
				},
				{
					name: "Nombre d'épisodes",
					value: attributes.episodeCount || 'Inconnu',
					inline: true,
				},
				{
					name: 'Genres',
					value: genres.join(', ') || 'Inconnu',
					inline: true,
				}
			);
		message.channel.send(embed);
	}
};

module.exports.help = MESSAGES.COMMANDS.ANIME.ANIME;
