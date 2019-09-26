const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Nie mogę znaleźć użytkownika!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nic nie zrobisz z takimi uprawnieniami!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nie możesz go wywalić!");
  
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Wyrzucony użytkownik", `${kUser} with ID ${kUser.id}`)
    .addField("Wyrzucony przez", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kanał", message.channel)
    .addField("Czas", message.createdAt)
    .addField("Powód", kReason);
  
    let reportsChannel = message.guild.channels.find(`name`, "reports");
    if(!reportsChannel) return message.channel.send("Nie mogę znaleźć kanału!");
  
    message.guild.member(kUser).kick(kReason);
    reportsChannel.send(kickEmbed);

}
 
module.exports.help = {
  name: "kick"
}
