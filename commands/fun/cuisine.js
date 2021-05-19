module.exports.run = (client, message, args) => {
  const taggedUser = message.mentions.users.first();

  message.channel.send(`Retourne à la cuisine, femme !!! ${taggedUser}`);
}

module.exports.help = {
  name: 'cuisine',
  description: 'Remettre les femmes à leur place',
  args: true,
  usage: <utilisateur></utilisateur>
}