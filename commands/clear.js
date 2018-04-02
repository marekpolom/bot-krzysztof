const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nope!").then(msg => msg.delete(3000));
  if(!args[0]) return message.channel.send("Nope!").then(msg => msg.delete(3000));

  let clearEmbed = new Discord.RichEmbed()
  .setColor("#bc0000")
  .addField("Ilość usuniętych wiadomości", `${args[0]}`);

  message.channel.bulkDelete(args[0]).then(() =>{
    message.channel.send(clearEmbed).then(msg => msg.delete(3000));
  });
}
 
module.exports.help = {
  name: "clear"
}