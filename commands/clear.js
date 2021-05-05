const config = require('../config.json');

module.exports = {
  name: "clear",
  description: "supprime un nombre donné de messages.",
  async execute(message, args) {
    if(!args.length) return message.reply(config.messages['no-argument-error']);
    if(isNaN(args[0])) return message.reply(config.messages['NaN-arg-error']);

    if(args[0] > 100) return message.reply(config.messages['too-much-clear-error']);
    if(args[0] < 1) return message.reply(config.messages['not-enough-clear-error']);

    await message.channel.messages.fetch({limit: args[0]}).then(messages => {
      message.channel.bulkDelete(messages);
    })
  }
}