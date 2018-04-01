const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Zaproszenie")
    .setColor("#22d615")
    .addField("https://discord.gg/gUA3BwE");

    message.channel.send(reportEmbed);
    message.delete().catch(O_o=>{});
}
 
module.exports.help = {
  name: "zapro"
}