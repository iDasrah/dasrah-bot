const {bot_messages} = require('../../json/config.json');

module.exports.run = (client, message, args) => {

  const taggedMember = message.mentions.members.first();

  if(!taggedMember) return message.reply(bot_messages['no-user-tagged']);
  if(!taggedMember.roles.cache.find(role => role.name === 'Femme')) return message.reply(`${taggedMember} n'est pas une femme.`)

  message.channel.send(`Retourne à la cuisine, femme !!! ${taggedMember}`);
}

module.exports.help = {
  name: 'cuisine',
  description: 'Remettre les femmes à leur place',
  args: true,
  usage: '<utilisateur>'
}