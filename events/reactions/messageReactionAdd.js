const { emoteList } = require('../../utils/emotes');
const { roles } = require('../../utils/roles');

module.exports = (client, messageReaction, user) => {
	const message = messageReaction.message;
	const member = message.guild.members.cache.get(user.id);
	const emoji = messageReaction.emoji.name;
	const channel = message.guild.channels.cache.find((c) => c.id === '846459783674593371');

	const roleList = roles(client);

	if (member.user.bot) return;
	if (emoteList.includes(emoji) && message.channel.id === channel.id) {
		switch (emoji) {
			case 'bronze1':
				member.roles.add(bronze);
				message.channel
					.send(`${member}, vous avez reçu le rôle ${bronze.toString()}.`)
					.then((msg) => msg.delete({ timeout: 3000 }));
				break;
			case 'silv1':
				member.roles.add(silver);
				message.channel
					.send(`${member}, vous avez reçu le rôle ${silver.toString()}.`)
					.then((msg) => msg.delete({ timeout: 3000 }));
				break;
			case 'gold1':
				member.roles.add(gold);
				message.channel
					.send(`${member}, vous avez reçu le rôle ${gold.toString()}.`)
					.then((msg) => msg.delete({ timeout: 3000 }));
				break;
			case 'plat1':
				member.roles.add(platinum);
				message.channel
					.send(`${member}, vous avez reçu le rôle ${platinum.toString()}.`)
					.then((msg) => msg.delete({ timeout: 3000 }));
				break;
			case 'diam1':
				member.roles.add(diamond);
				message.channel
					.send(`${member}, vous avez reçu le rôle ${diamond.toString()}.`)
					.then((msg) => msg.delete({ timeout: 3000 }));
				break;
			case 'c1':
				member.roles.add(champion);
				message.channel
					.send(`${member}, vous avez reçu le rôle ${champion.toString()}.`)
					.then((msg) => msg.delete({ timeout: 3000 }));
				break;
			case 'gc1':
				member.roles.add(grandChampion);
				message.channel
					.send(`${member}, vous avez reçu le rôle ${grandChampion.toString()}.`)
					.then((msg) => msg.delete({ timeout: 3000 }));
				break;
			case 'ssl':
				member.roles.add(ssl);
				message.channel
					.send(`${member}, vous avez reçu le rôle ${ssl.toString()}.`)
					.then((msg) => msg.delete({ timeout: 3000 }));
				break;
			case 'sign_male':
				member.roles.add(man);
				message.channel
					.send(`${member}, vous avez reçu le rôle ${man.toString()}.`)
					.then((msg) => msg.delete({ timeout: 3000 }));
				break;
			case 'sign_female':
				member.roles.add(woman);
				message.channel
					.send(`${member}, vous avez reçu le rôle ${woman.toString()}.`)
					.then((msg) => msg.delete({ timeout: 3000 }));
				break;
			case 'playstation':
				member.roles.add(playstation);
				message.channel
					.send(`${member}, vous avez reçu le rôle ${playstation.toString()}.`)
					.then((msg) => msg.delete({ timeout: 3000 }));
				break;
			case 'windows_10':
				member.roles.add(windows);
				message.channel
					.send(`${member}, vous avez reçu le rôle ${windows.toString()}.`)
					.then((msg) => msg.delete({ timeout: 3000 }));
				break;
			case 'xbox':
				member.roles.add(xbox);
				message.channel
					.send(`${member}, vous avez reçu le rôle ${xbox.toString()}.`)
					.then((msg) => msg.delete({ timeout: 3000 }));
				break;
			case 'switch':
				member.roles.add(nswitch);
				message.channel
					.send(`${member}, vous avez reçu le rôle ${nswitch.toString()}.`)
					.then((msg) => msg.delete({ timeout: 3000 }));
				break;
			case 'developer':
				member.roles.add(developer);
				message.channel
					.send(`${member}, vous avez reçu le rôle ${developer.toString()}.`)
					.then((msg) => msg.delete({ timeout: 3000 }));
				break;
			case 'flstudio':
				member.roles.add(beatmaker);
				message.channel
					.send(`${member}, vous avez reçu le rôle ${beatmaker.toString()}.`)
					.then((msg) => msg.delete({ timeout: 3000 }));
				break;
			case 'zerotwo':
				member.roles.add(anime);
				message.channel
					.send(`${member}, vous avez reçu le rôle ${anime.toString()}.`)
					.then((msg) => msg.delete({ timeout: 3000 }));
				break;
			case 'controller':
				member.roles.add(videogames);
				message.channel
					.send(`${member}, vous avez reçu le rôle ${videogames.toString()}.`)
					.then((msg) => msg.delete({ timeout: 3000 }));
				break;
			case 'sword':
				member.roles.add(minecraft);
				message.channel
					.send(`${member}, vous avez reçu le rôle ${minecraft.toString()}.`)
					.then((msg) => msg.delete({ timeout: 3000 }));
				break;
			case 'rocketleague':
				member.roles.add(rocketleague);
				message.channel
					.send(`${member}, vous avez reçu le rôle ${rocketleague.toString()}.`)
					.then((msg) => msg.delete({ timeout: 3000 }));
				break;
			case 'overwatch':
				member.roles.add(overwatch);
				message.channel
					.send(`${member}, vous avez reçu le rôle ${overwatch.toString()}.`)
					.then((msg) => msg.delete({ timeout: 3000 }));
				break;
		}
	}

	if (
		!(member.roles.cache.has('851718162738315295') && member.roles.cache.has('851718367050989609'))
	) {
		member.roles.add(headerprofile);
		member.roles.add(footerprofile);
	}
};
