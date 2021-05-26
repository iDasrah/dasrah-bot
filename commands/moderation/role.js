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

    const action = args[0];
    const taggedMember = message.mentions.members.first();
    let roleArgs = args.splice(2)

    if(!taggedMember) return message.reply(bot_messages['no-user-tagged']);

    if(action === 'add') {

      roleArgs = roleArgs.join(' ');
      const role = message.guild.roles.cache.find(role => role.name === roleArgs);
      addRole(taggedMember, role, message);

    } else if(action === 'remove') {

      roleArgs = roleArgs.join(' ');
      const role = message.guild.roles.cache.find(role => role.name === roleArgs);
      removeRole(taggedMember, role, message);

    } else if(action === 'adds') {

      args = args.slice(2);
      args.forEach((arg) => {
        const role = message.guild.roles.cache.find(role => role.name === arg.toString());
        console.log(role);
        addRole(taggedMember, role, message);

      });
    } else if(action === 'removes') {
      args = args.slice(2);
      args.forEach((arg) => {
        const role = message.guild.roles.cache.find(role => role.name === arg.toString());
        console.log(role);
        removeRole(taggedMember, role, message);

      });
    }
};

module.exports.help = {
  name: 'role',
  description: 'Gérer les rôles',
  args: [true, [3, 'strict']],
  permission: 'MANAGE_ROLES',
  usage: '<add/adds/remove/removes> <utilisateur> <role/roles>',
  category: 'moderation',
  aliases: ['r']
}