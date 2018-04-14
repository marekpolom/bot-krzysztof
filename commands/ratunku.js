const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  const k_zapro = {
   opis: "Zaproszenie",
  }

  const k_ratunku = {
    opis: "RATUNKU!!!!!"
   }
  
  let ratunku = new Discord.RichEmbed()
  .setTitle("~RATUNKU~")
  .setColor("#3292c9")
  .addField(".8ball", "<pytanie>")
  .addField(".ban", "<@user> <powód bana>")
  .addField(".clear", "<liczba>")
  .addField(".dice", "<ilość ścianek> <ilość rzutów>")
  .addField(".hate", "<coś czego nienawidzisz>")
  .addField(".jest", "<jakaś czynność> <coś czego nienawidzisz>")
  .addField(".kick", "<@user> <powód kicka>")
  .addField(".ratunku", `${k_ratunku.opis}`)
  .addField(".report", "<@user> <powód zgłoszenia>")
  .addField(".say", "<napis, który wypisze bot>")
  .addField(".tempmute", "<@user> <długość wyciszenie (s/m/h)>")
  .addField(".zapro", `${k_zapro.opis}`);

  message.delete().catch();
  message.channel.send(ratunku);
}
 
module.exports.help = {
  name: "ratunku"
}