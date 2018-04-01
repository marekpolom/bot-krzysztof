const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {


  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Nie mogę znaleźć użytkownika!");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Nie możesz go wyciszyć!");
  let muterole = message.guild.roles.find(`name`, "muted");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          SPEAK: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.reply("Podaj czas! (s/m/h)");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> został wyciszony na ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> może otworzyć mordę!`);
  }, ms(mutetime));

}

module.exports.help = {
  name: "tempmute"
}