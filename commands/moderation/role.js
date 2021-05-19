const { bot_messages } = require('../../json/config.json');

function addRole(taggedMember, role, message) {
  if(role) {
    if(taggedMember.roles.cache.has(role.id)) return message.reply(bot_messages['has-role']);
    taggedMember.roles.add(role)
    .then(() => message.channel.send(`Vous avez donné le rôle ${role} à ${taggedMember.user}`));
  } else return message.reply(bot_messages['role-doesnt-exist']);
}

function removeRole(taggedMember, role, message) {
  if(role) {
    if(!taggedMember.roles.cache.has(role.id)) return message.reply(bot_messages['hasnt-role']);
    taggedMember.roles.remove(role)
    .then(() => message.channel.send(`Vous avez supprimé le rôle ${role} de ${taggedMember.user}`));
  } else return message.reply(bot_messages['role-doesnt-exist']);
}

module.exports.run = (client, message, args) => {
  
    const taggedMember = message.mentions.members.first();
    let role = '';

    if(!taggedMember) return message.reply(bot_messages['not-enough-arguments-error']);

    if(args[0] === 'add') {

      if(args.length != 3) return message.reply(bot_messages['not-enough-arguments-error']);

      role = message.guild.roles.cache.find(role => role.name === args[2]);
      addRole(taggedMember, role, message);

    } else if(args[0] === 'remove') {

      if(args.length != 3) return message.reply(bot_messages['not-enough-arguments-error']);
      role = message.guild.roles.cache.find(role => role.name === args[2]);
      removeRole(taggedMember, role, message);

    } else if(args[0] === 'adds') {

      args = args.slice(2);
      args.forEach((arg) => {
        role = message.guild.roles.cache.find(role => role.name === arg.toString());
        console.log(role);
        addRole(taggedMember, role, message);

      });
    } else if(args[0] === 'removes') {
      args = args.slice(2);
      args.forEach((arg) => {
        role = message.guild.roles.cache.find(role => role.name === arg.toString());
        console.log(role);
        removeRole(taggedMember, role, message);

      });
    }
};

module.exports.help = {
  name: 'role',
  description: 'Gérer les rôles',
  args: true,
  permission: 'MANAGE_ROLES',
  usage: '<add/adds/remove/removes> <utilisateur> <role/roles>'
}