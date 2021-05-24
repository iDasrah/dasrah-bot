const { bot_messages } = require('../../json/config.json');

module.exports.run = async (client, message, args) => {
    if(args[0]) {
      if(isNaN(args[0])) return message.reply(bot_messages['NaN-arg-error']);

      else if(args[0] > 100) return message.reply(bot_messages['too-much-clear-error']);
      else if(args[0] < 1) return message.reply(bot_messages['not-enough-clear-error']);
    }

    if(!args.length) {
      await message.channel.messages.fetch({limit: 100}).then(messages => {
        message.channel.bulkDelete(messages);
      });
    } else {
      await message.channel.messages.fetch({limit: args[0]}).then(messages => {
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