const { MessageEmbed } = require('discord.js');
const { roles } = require('./roles');
const { emotes } = require('./emotes');

function loadEmbeds(client) {
	const roleList = roles(client);
	const emoteList = emotes(client);

	embedRL = () => {
		const embed = new MessageEmbed().setTimestamp();
		embed
			.setTitle('ROCKET LEAGUE RANKS')
			.setDescription('Cliquez sur une réaction pour vous attribuer un rôle.')
			.addField(
				'Rôles disponibles:',
				`${bronze1} : ${bronze.toString()}
			${silver1} : ${silver.toString()}
			${gold1} : ${gold.toString()}
			${platinum1} : ${platinum.toString()}
			${diamond1} : ${diamond.toString()}
			${champion1} : ${champion.toString()}
			${grandChampion1} : ${grandChampion}
			${sslEmote} : ${ssl}
			`
			);
		return embed;
	};

	embedSEX = () => {
		const embed = new MessageEmbed().setTimestamp();
		embed
			.setTitle('SEXE')
			.setDescription('Cliquez sur une réaction pour vous attribuer un rôle.')
			.addField(
				'Rôles disponibles',
				`${male_sign} : ${man.toString()}
			${female_sign} : ${woman.toString()}
			`
			);
		return embed;
	};

	embedPLATFORM = () => {
		const embed = new MessageEmbed().setTimestamp();
		embed
			.setTitle('PLATEFORME')
			.setDescription('Cliquez sur une réaction pour vous attribuer un rôle.')
			.addField(
				'Rôles disponibles',
				`
				${playstationEmote} : ${playstation.toString()}
				${switchEmote} : ${nswitch.toString()}
				${windowsEmote} : ${windows.toString()}
				${xboxEmote} : ${xbox.toString()}
				`
			);

		return embed;
	};

	embedHOBBY = () => {
		const embed = new MessageEmbed().setTimestamp();
		embed
			.setTitle("CENTRES D'INTERET")
			.setDescription('Cliquez sur une réaction pour vous attribuer un rôle.')
			.addField(
				'Rôles disponibles',
				`
			${programmationEmote} : ${developer.toString()}
			${beatmakingEmote} : ${beatmaker.toString()}
			${videogamesEmote} : ${videogames.toString()}
			${animeEmote} : ${anime.toString()}
			`
			);

		return embed;
	};

	embedGAMES = () => {
		const embed = new MessageEmbed().setTimestamp();
		embed
			.setTitle('JEUX')
			.setDescription('Cliquez sur une réaction pour vous attribuer un rôle.')
			.addField(
				'Rôles disponibles',
				`
				${minecraftEmote} : ${minecraft.toString()}
				${rocketleagueEmote} : ${rocketleague.toString()}
				${overwatchEmote} : ${overwatch.toString()}
				`
			);

		return embed;
	};

	return [embedRL(), embedSEX(), embedPLATFORM(), embedHOBBY(), embedGAMES()];
}

module.exports = {
	loadEmbeds,
};
