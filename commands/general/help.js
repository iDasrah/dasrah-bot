const { MessageEmbed } = require('discord.js');
const { prefix, bot_messages } = require('../../json/config.json')
const { readdirSync } = require('fs');
const categoryList = readdirSync('./commands');

module.exports.run = (client, message, args) => {
  if(!args.length) {
    const embed = new MessageEmbed()
    .setColor('#36394F')
    .addField('HELP', `Liste des commandes\r\nPour plus d'infos sur une commande, tapez ${prefix}${exports.help.name} [commande]`);

    for(const category of categoryList) {
      embed.addField(
        `${category}`, `${client.commands.filter(cat => cat.help.category === category).map(cmd => cmd.help.name).join('\r\n ')}`
      )
    }
    return message.channel.send(embed);
  } else {
    const command = client.commands.get(args[0]);
    if(!command) return message.reply(bot_messages['help-invalid-command']);
    const embed = new MessageEmbed()
    .setColor('#36394F')
    .setTitle(`HELP: ${command.help.name}`)
    .addField(`Description`, `${command.help.description}`)
    .addField(`Utilisation`, `${prefix}${command.help.name} ${command.help.usage}`);

    // if(command.help.aliases.length > 1) embed.addField('Aliases', `${command.help.aliases.join(', ')}`, true);
    return message.channel.send(embed);
    }
  }

module.exports.help = {
  name: 'help',
  description: 'Informations sur les commandes du bot',
  category: 'general',
  usage: '[commande]',
  args: [false, [1, '']]
}