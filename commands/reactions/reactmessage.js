const { MessageEmbed } = require('discord.js');

module.exports.run = (client, message, args) => {

  if(args[0] === 'rl') {
    const bronze = message.guild.roles.cache.get('846328120289525781');
    const silver = message.guild.roles.cache.get('846328390147112981');
    const gold = message.guild.roles.cache.get('846328466509135873');
    const platinum = message.guild.roles.cache.get('846328611014705162');
    const diamond = message.guild.roles.cache.get('846328675430563870');
    const champion = message.guild.roles.cache.get('846328670485217281');
    const grandChampion = message.guild.roles.cache.get('846328873892839456');
    const ssl = message.guild.roles.cache.get('846329006240563200');

    const emotes = [
      bronze1 = message.guild.emojis.cache.get('846447775272271914'),
      silver1 = message.guild.emojis.cache.get('846447776564641812'),
      gold1 = message.guild.emojis.cache.get('846447776140361818'),
      platinum1 = message.guild.emojis.cache.get('846447778551955477'),
      diamond1 = message.guild.emojis.cache.get('846447778077999165'),
      champion1 = message.guild.emojis.cache.get('846447778049818634'),
      grandChampion1 = message.guild.emojis.cache.get('846453881902202911'),
      sslEmote = message.guild.emojis.cache.get('846453881956597760')
    ]

    const embed = new MessageEmbed()
    .setTitle('ROCKET LEAGUE RANKS')
    .setDescription('Cliquez sur une réaction pour vous attribuer un rôle.')
    .addField(
      "Rôles disponibles:",
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

    client.channels.cache.get('846459783674593371').send((embed)).then(async msg => {
      for(const emote of emotes) {
        await msg.react(emote);
      }
    })
  }

}

module.exports.help = {
  name: 'reactmessage',
  description: 'Créer un message avec des réactions définies',
  args: [true, [1,'strict']],
  usage: '<type>',
  category: 'reactions',
  aliases: ['rm'],
  permission: 'MANAGE_ROLES'
}