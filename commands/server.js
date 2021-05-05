const Discord = require('discord.js');
const client = Discord.Client();

module.exports = {
  name: "server",
  description: "informations concernant le serveur.",
  execute(message, args) {
    client.guilds.cache.forEach(guild => {
      message.channel.send(`${guild.name}`);
    })
  }
}