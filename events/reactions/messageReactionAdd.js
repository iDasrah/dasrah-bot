module.exports = (client, messageReaction, user) => {
  const message = messageReaction.message;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;
  const channel = message.guild.channels.cache.find(c => c.id === '846459783674593371');
  const rolesCache = message.guild.roles.cache;

  const bronze = rolesCache.get('846328120289525781');
  const silver = rolesCache.get('846328390147112981');
  const gold = rolesCache.get('846328466509135873');
  const platinum = rolesCache.get('846328611014705162');
  const diamond = rolesCache.get('846328675430563870');
  const champion = rolesCache.get('846328670485217281');
  const grandChampion = rolesCache.get('846328873892839456');
  const ssl = rolesCache.get('846329006240563200');
  const man = rolesCache.get('844710960496377864');
  const woman = rolesCache.get('844679115189125122');
  const playstation = rolesCache.get('846432721139793960');
  const nswitch = rolesCache.get('846432745453387776');
  const windows = rolesCache.get('846432682246144082');
  const xbox = rolesCache.get('846432780253396994');

  if(member.user.bot) return;
  if(['bronze1', 'silv1', 'gold1', 'plat1', 'diam1', 'c1', 'gc1', 'ssl', 'sign_male', 'sign_female', 'playstation', 'windows_10', 'switch', 'xbox'].includes(emoji) && message.channel.id === channel.id) {
    switch(emoji){
      case 'bronze1':
        member.roles.add(bronze);
        message.channel.send(`${member}, vous avez reçu le rôle ${bronze.toString()}.`)
        .then(msg => msg.delete({timeout: 3000}));
        break;
      case 'silv1':
        member.roles.add(silver);
        message.channel.send(`${member}, vous avez reçu le rôle ${silver.toString()}.`)
        .then(msg => msg.delete({timeout: 3000}));
        break;
      case 'gold1':
        member.roles.add(gold);
        message.channel.send(`${member}, vous avez reçu le rôle ${gold.toString()}.`)
        .then(msg => msg.delete({timeout: 3000}));
        break;
      case 'plat1':
        member.roles.add(platinum);
        message.channel.send(`${member}, vous avez reçu le rôle ${platinum.toString()}.`)
        .then(msg => msg.delete({timeout: 3000}));
        break;
      case 'diam1':
        member.roles.add(diamond);
        message.channel.send(`${member}, vous avez reçu le rôle ${diamond.toString()}.`)
        .then(msg => msg.delete({timeout: 3000}));
        break;
      case 'c1':
        member.roles.add(champion);
        message.channel.send(`${member}, vous avez reçu le rôle ${champion.toString()}.`)
        .then(msg => msg.delete({timeout: 3000}));
        break;
      case 'gc1':
        member.roles.add(grandChampion);
        message.channel.send(`${member}, vous avez reçu le rôle ${grandChampion.toString()}.`)
        .then(msg => msg.delete({timeout: 3000}));
        break;
      case 'ssl':
        member.roles.add(ssl);
        message.channel.send(`${member}, vous avez reçu le rôle ${ssl.toString()}.`)
        .then(msg => msg.delete({timeout: 3000}));
        break;
      case 'sign_male':
        member.roles.add(man);
        message.channel.send(`${member}, vous avez reçu le rôle ${man.toString()}.`)
        .then(msg => msg.delete({timeout: 3000}));
        break;
      case 'sign_female':
        member.roles.add(woman);
        message.channel.send(`${member}, vous avez reçu le rôle ${woman.toString()}.`)
        .then(msg => msg.delete({timeout: 3000}));
        break;
      case 'playstation':
        member.roles.add(playstation);
        message.channel.send(`${member}, vous avez reçu le rôle ${playstation.toString()}.`)
        .then(msg => msg.delete({timeout: 3000}));
        break;
      case 'windows_10':
        member.roles.add(windows);
        message.channel.send(`${member}, vous avez reçu le rôle ${windows.toString()}.`)
        .then(msg => msg.delete({timeout: 3000}));
        break;
      case 'xbox':
        member.roles.add(xbox);
        message.channel.send(`${member}, vous avez reçu le rôle ${xbox.toString()}.`)
        .then(msg => msg.delete({timeout: 3000}));
        break;
      case 'switch':
        member.roles.add(nswitch);
        message.channel.send(`${member}, vous avez reçu le rôle ${nswitch.toString()}.`)
        .then(msg => msg.delete({timeout: 3000}));
        break;
    };
  };
}

