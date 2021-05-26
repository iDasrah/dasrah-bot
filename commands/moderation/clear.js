const { bot_messages } = require('../../json/config.json');

module.exports.run = async (client, message, args) => {

    const nbrMsg = args[0];

    if(nbrMsg) {
      if(isNaN(nbrMsg)) return message.reply(bot_messages['NaN-arg-error']);

      else if(nbrMsg > 100) return message.reply(bot_messages['too-much-clear-error']);
      else if(nbrMsg < 1) return message.reply(bot_messages['not-enough-clear-error']);
    }

    if(!args.length) {
      await message.channel.messages.fetch({limit: 100}).then(messages => {
        message.channel.bulkDelete(messages);
      });
    } else {
      await message.channel.messages.fetch({limit: nbrMsg}).then(messages => {
        message.channel.bulkDelete(messages);
      });
    }
  };

module.exports.help = {
  name: 'clear',
  description: 'Nettoie le channel',
  args: [false, [1, '']],
  permission: 'MANAGE_MESSAGES',
  usage: '[nombre]',
  cooldown: 5,
  category: 'moderation',
  aliases: ['c']
}