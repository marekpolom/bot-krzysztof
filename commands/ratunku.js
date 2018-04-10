const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  const k_ratunku = {
   opis: "RATUNKU!!!"
  }
  
  let ratunku = new Discord.RichEmbed()
  .setTitle("~RATUNKU~")
  .setColor("#3292c9")
  .addField("~8ball~", "<pytanie>")
  .addField("~ban~", "<@user> <powód bana>")
  .addField("~clear~", "<liczba>")
  .addField("~hate~", "<coś czego nienawidzisz>")
  .addField("~kick~", "<@user> <powód kicka>")
  .addField("~ratunku~")
  .addField("~report~", "<@user> <powód zgłoszenia>")
  .addField("~say~", "<napis, który wypisze bot>")
  .addField("~tempmute~", "<@user> <długość wyciszenie (s/m/h)>")
  .addField("~zapro~", `${k_ratunku.opis}`);

  message.delete().catch();
  message.channel.send(ratunku);
}
 
module.exports.help = {
  name: "ratunku"
}