module.exports.roles = (client) => {
	const guild = client.guilds.cache.get('825753614898167848');
	const rolesCache = guild.roles.cache;

	return [
		[
			(bronze = rolesCache.get('846328120289525781')),
			(silver = rolesCache.get('846328390147112981')),
			(gold = rolesCache.get('846328466509135873')),
			(platinum = rolesCache.get('846328611014705162')),
			(diamond = rolesCache.get('846328675430563870')),
			(champion = rolesCache.get('846328670485217281')),
			(grandChampion = rolesCache.get('846328873892839456')),
			(ssl = rolesCache.get('846329006240563200')),
		],
		[(man = rolesCache.get('844710960496377864')), (woman = rolesCache.get('844679115189125122'))],
		[
			(playstation = rolesCache.get('846432721139793960')),
			(nswitch = rolesCache.get('846432745453387776')),
			(windows = rolesCache.get('846432682246144082')),
			(xbox = rolesCache.get('846432780253396994')),
		],
		[
			(developer = rolesCache.get('851725079158849546')),
			(beatmaker = rolesCache.get('851725252375216128')),
			(videogames = rolesCache.get('851725348440768542')),
			(anime = rolesCache.get('851725422067580929')),
		],
		[
			(minecraft = rolesCache.get('851743797776089109')),
			(rocketleague = rolesCache.get('846361799606796288')),
			(overwatch = rolesCache.get('851743893548564490')),
		],
	];
};

module.exports.profile = (client) => {
	const guild = client.guilds.cache.get('825753614898167848');
	const rolesCache = guild.roles.cache;

	return [
		(headerprofile = rolesCache.get('851718162738315295')),
		(footerprofile = rolesCache.get('851718367050989609')),
	];
};
