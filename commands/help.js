const Discord = require('discord.js');
const { prefix } = require('../config.json');
const { commands } = require('./commands.json');

module.exports = {
  name: "help",
  description: "recevez de l'aide sur les commandes du bot.",
  execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setTitle("COMMANDES")

    for (let i = 0; i < commands.length; i++) {
      embed.addField(getCommandName(i), getCommandDesc(i));
    }

    message.channel.send(embed);
  }
}

function getCommandName(index) {
  command = commands[index];

  if(!command.hasOwnProperty('args')) {
    return `${prefix}${command.name}`;
  }

  return `${prefix}${command.name} <${command.args}>`;
}

function getCommandDesc(index) {
  command = commands[index];
  return `${command.description}`;
}