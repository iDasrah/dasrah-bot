const { messages } = require('../../json/config.json');

module.exports.run = async (client, message, args) => {
    if(args[0]) {
      if(isNaN(args[0])) return message.reply(messages['NaN-arg-error']);

      if(args[0] > 100) return message.reply(messages['too-much-clear-error']);
      if(args[0] < 1) return message.reply(messages['not-enough-clear-error']);
    }

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(messages['no-permission-error']);

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
  description: 'Nettoie le channel'
}