const { messages } = require('../config.json');

module.exports = {
  name: 'help',
  description: 'Commande d\'aide',
  execute(client, message, args) {
    message.reply(messages['disabled-command']);
  }
}