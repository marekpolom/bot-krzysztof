const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Nie mogę znaleźć użytkownika!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Nic nie zrobisz z takimi uprawnieniami!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nie możesz go zbanować!");
  
    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Zbanowany użytkownik", `${bUser} with ID ${bUser.id}`)
    .addField("Zbanowany przez", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kanał", message.channel)
    .addField("Czas", message.createdAt)
    .addField("Powód", bReason);
  
    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Nie mogę znaleźć kanału!");
  
    message.guild.member(bUser).ban(bReason);
    reportschannel.send(banEmbed);

}
 
module.exports.help = {
  name: "ban"
}
