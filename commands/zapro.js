const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let invite = "https://discord.gg/gUA3BwE";
    let zapro = new Discord.RichEmbed()
    .setColor("#f9f102")
    .addField("Zaproszenie: ", invite)
        
    message.channel.send(zapro);
    message.delete().catch(O_o=>{});
}
 
module.exports.help = {
  name: "zapro"
}
