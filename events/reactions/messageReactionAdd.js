module.exports = (client, messageReaction, user) => {
  const message = messageReaction.message;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;
  const channel = message.guild.channels.cache.find(c => c.id === '846459783674593371');

  const bronze = message.guild.roles.cache.get('846328120289525781');
  const silver = message.guild.roles.cache.get('846328390147112981');
  const gold = message.guild.roles.cache.get('846328466509135873');
  const platinum = message.guild.roles.cache.get('846328611014705162');
  const diamond = message.guild.roles.cache.get('846328675430563870');
  const champion = message.guild.roles.cache.get('846328670485217281');
  const grandChampion = message.guild.roles.cache.get('846328873892839456');
  const ssl = message.guild.roles.cache.get('846329006240563200');

  if(member.user.bot) return;
  if(['bronze1', 'silv1', 'gold1', 'plat1', 'diam1', 'c1', 'gc1', 'ssl'].includes(emoji) && message.channel.id === channel.id) {
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
    };
  };
}

