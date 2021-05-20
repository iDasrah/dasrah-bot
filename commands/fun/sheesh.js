module.exports.run = (client, message, args) => {
  e = "E".repeat(Math.floor(Math.random() * (50 - 2) + 2));
  message.channel.send(`SH${e}SH`);
}

module.exports.help = {
  name: 'sheesh',
  description: 'Sheesh',
  args: false
}