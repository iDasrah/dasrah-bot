const { MessageEmbed } = require('discord.js');

module.exports.run = (client, message, args) => {

  const type = args[0]
  const rolesCache = message.guild.roles.cache;
  const emotesCache = message.guild.emojis.cache;
  const embed = new MessageEmbed()
  .setTimestamp();
  let emotes = [];

  if(type === 'rl') {

    const roles = [
      bronze = rolesCache.get('846328120289525781'),
      silver = rolesCache.get('846328390147112981'),
      gold = rolesCache.get('846328466509135873'),
      platinum = rolesCache.get('846328611014705162'),
      diamond = rolesCache.get('846328675430563870'),
      champion = rolesCache.get('846328670485217281'),
      grandChampion = rolesCache.get('846328873892839456'),
      ssl = rolesCache.get('846329006240563200')
    ];

    emotes = [
      bronze1 = emotesCache.get('846447775272271914'),
      silver1 = emotesCache.get('846447776564641812'),
      gold1 = emotesCache.get('846447776140361818'),
      platinum1 = emotesCache.get('846447778551955477'),
      diamond1 = emotesCache.get('846447778077999165'),
      champion1 = emotesCache.get('846447778049818634'),
      grandChampion1 = emotesCache.get('846453881902202911'),
      sslEmote = emotesCache.get('846453881956597760')
    ];

    embed.setTitle('ROCKET LEAGUE RANKS')
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
  }

  else if(type === 'sex') {

    const roles = [
      man = rolesCache.get('844710960496377864'),
      woman = rolesCache.get('844679115189125122')
    ]

    emotes = [
      male_sign = emotesCache.get('847068292665442334'),
      female_sign = emotesCache.get('847068267771854848')
    ]

    embed.setTitle('ROLES SEXE')
    .setDescription('Cliquez sur une réaction pour vous attribuer un rôle.')
    .addField(
      'Rôles disponibles',
      `${male_sign} : ${man.toString()}
      ${female_sign} : ${woman.toString()}`
    )
  } else if(type === 'platform') {

    const roles = [
      playstation = rolesCache.get('846432721139793960'),
      nswitch = rolesCache.get('846432745453387776'),
      windows = rolesCache.get('846432682246144082'),
      xbox = rolesCache.get('846432780253396994')
    ]

    emotes = [
      playstationEmote = emotesCache.get('847098234870038568'),
      switchEmote = emotesCache.get('847098233931169813'),
      windowsEmote = emotesCache.get('847098235037810698'),
      xboxEmote = emotesCache.get('847098234560315402')
    ]

    embed.setTitle('ROLES PLATEFORME')
    .setDescription('Cliquez sur une réaction pour vous attribuer un rôle.')
    .addField(
      'Rôles disponibles', `
      ${playstationEmote} : ${playstation.toString()}
      ${switchEmote} : ${nswitch.toString()}
      ${windowsEmote} : ${windows.toString()}
      ${xboxEmote} : ${xbox.toString()}
      `
    );
  }

  client.channels.cache.get('846459783674593371').send((embed)).then(async msg => {
    for(const emote of emotes) {
      console.log(emote)
      await msg.react(emote);
    }
    message.channel.send(`Message de séléction de rôle généré dans le channel ${client.channels.cache.get('846459783674593371')}.`)
  });

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