const { MessageEmbed, MessageAttachment } = require('discord.js')
const dice = new MessageAttachment('./assets/img/dice.png');
const { bot_messages, prefix } = require('../../json/config.json');
const number = () => Math.floor(Math.random() * 6 + 1);

module.exports.run = (client, message, args) => {

    const action = args[0];

    const embed = new MessageEmbed()
    .setColor('#E72021')
    .setTimestamp()
    .attachFiles(dice)
    .setThumbnail('attachment://dice.png')
    .setDescription('Un combat de dés vient de commencer...');

    if(!args.length) {
      const number1 = number();
      const number2 = number();
      embed.setTitle(`${message.author.username} VS ${client.user.username}`)
      .addFields(
        { name: message.author.username, value: number1, inline: true },
        { name: client.user.username, value: number2, inline: true }
      );

      if(number1 > number2) embed.setFooter(`VICTOIRE DE ${message.author.username}`);
      else if(number1 === number2) embed.setFooter(`EGALITE`);
      else embed.setFooter(`VICTOIRE DE ${client.user.username}`);
      }

      else if(action === 'duel') {
        const taggedUser = message.mentions.users.first();
        if(!taggedUser) return message.reply(bot_messages['no-user-tagged']);
        const number1 = number();
        const number2 = number();
        embed.setTitle(`${message.author.username} VS ${taggedUser.username}`)
        .addFields(
          { name: message.author.username, value: number1, inline: true },
          { name: taggedUser.username, value: number2, inline: true }
        );
        if(number1 > number2) embed.setFooter(`VICTOIRE DE ${message.author.username}`);
        else if(number1 === number2) embed.setFooter(`EGALITE`);
        else embed.setFooter(`VICTOIRE DE ${taggedUser.username}`);
      } else return message.reply(`${bot_messages['wrong-argument-error']}\r\n\`${prefix}${exports.help.name} ${exports.help.usage}\``);
    message.channel.send(embed);
  };

module.exports.help = {
  name: 'dice',
  description: 'Jeu de dés',
  args: [false, [2, '']],
  usage: '[duel] <utilisateur>',
  category: 'games',
  aliases: ['d']
};