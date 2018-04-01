const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let invite = "https://discord.gg/gUA3BwE";

    let zaproEmbed = new Discord.RichEmbed()
    .setDescription("Zaproszenie")
    .setColor("#22d615")
    .addField(invite);

    console.log(zaproEmbed);
}
 
module.exports.help = {
  name: "zapro"
}