module.exports = (client, member) => {
	// membre quitte
	const channel = member.guild.channels.cache.get('846288755480592435');
	const guild = client.guilds.cache.get('825753614898167848');
	const roadToChannel = guild.channels.cache.get('851794676637630494');
	const currentRoadTo = 50;

	if (!channel) return;
	channel.send(`Pourquoi t'es parti ${member} :(`);

	// road to bar
	clearChannel(roadToChannel);
	roadToChannel.send(numberToEmote(guild.memberCount) + loadBar(guild, currentRoadTo));
};

// clear the old messages
const clearChannel = async (channel) =>
	await channel.messages.fetch({ limit: 100 }).then((messages) => {
		channel.bulkDelete(messages);
	});

const numberToEmote = (number) => {
	nbrString = [];

	for (let digit of number.toString()) {
		if (digit == 0) nbrString.push(':zero:');
		else if (digit == 1) nbrString.push(':one:');
		else if (digit == 2) nbrString.push(':two:');
		else if (digit == 3) nbrString.push(':three:');
		else if (digit == 4) nbrString.push(':four:');
		else if (digit == 5) nbrString.push(':five:');
		else if (digit == 6) nbrString.push(':six:');
		else if (digit == 7) nbrString.push(':seven:');
		else if (digit == 8) nbrString.push(':eight:');
		else if (digit == 9) nbrString.push(':nine:');
	}
	return nbrString.join('');
};

function loadBar(guild, roadto) {
	const count = guild.memberCount;

	if (count < roadto * (1 / 10)) return ':black_large_square:'.repeat(10) + numberToEmote(roadto);
	else if (count >= roadto * (1 / 10) && count < roadto * (2 / 10))
		return ':green_square:' + ':black_large_square:'.repeat(9) + numberToEmote(roadto);
	else if (count >= roadto * (2 / 10) && count < roadto * (3 / 10))
		return ':green_square:'.repeat(2) + ':black_large_square:'.repeat(8) + numberToEmote(roadto);
	else if (count >= roadto * (3 / 10) && count < roadto * (4 / 10))
		return ':green_square:'.repeat(3) + ':black_large_square:'.repeat(7) + numberToEmote(roadto);
	else if (count >= roadto * (4 / 10) && count < roadto * (5 / 10))
		return ':green_square:'.repeat(4) + ':black_large_square:'.repeat(6) + numberToEmote(roadto);
	else if (count >= roadto * (5 / 10) && count < roadto * (6 / 10))
		return ':green_square:'.repeat(5) + ':black_large_square:'.repeat(5) + numberToEmote(roadto);
	else if (count >= roadto * (6 / 10) && count < roadto * (7 / 10))
		return ':green_square:'.repeat(6) + ':black_large_square:'.repeat(4) + numberToEmote(roadto);
	else if (count >= roadto * (7 / 10) && count < roadto * (8 / 10))
		return ':green_square:'.repeat(7) + ':black_large_square:'.repeat(3) + numberToEmote(roadto);
	else if (count >= roadto * (8 / 10) && count < roadto * (9 / 10))
		return ':green_square:'.repeat(8) + ':black_large_square:'.repeat(2) + numberToEmote(roadto);
	else if (count >= roadto * (9 / 10) && count < roadto * (8 / 10))
		return ':green_square:'.repeat(9) + ':black_large_square:'.repeat(1) + numberToEmote(roadto);
	else if (count >= roadto * (10 / 10)) {
		return (
			':green_square:'.repeat(10) +
			numberToEmote(roadto) +
			"\r\nL'OBJECTIF A ETE ATTEINT !!!! :partying_face:"
		);
	}
}
