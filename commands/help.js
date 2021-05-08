const Discord = require('discord.js');
const { prefix } = require('../config.json');
const { commands } = require('./commands.json');

module.exports = {
  name: "help",
  description: "recevez de l'aide sur les commandes du bot.",
  execute(message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor("#E740E3")
    .setTimestamp()
    .setTitle("COMMANDES")
    .setDescription("[] -> argument optionnel\n<> -> argument obligatoire");

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

  args = "";
  command.args.forEach(arg => {
    if(arg.includes("?")) {
      arg = arg.substring(1);
      args += ` [${arg}]`;
    } else {
      args += ` <${arg}>`;
    }
  });

  return `${prefix}${command.name} ${args}`;
}

function getCommandDesc(index) {
  command = commands[index];
  return `${command.description}`;
}