const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!args[1]) return message.reply("Zadaj pełne pytanie!");
  let replies = ["BAJA!"];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(0).join(" ");

  let ballEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#ff9900")
  .addField("Pytanie", question)
  .addField("Odpowiedź", replies[result]);

  message.channel.send(ballEmbed);
}
 
module.exports.help = {
  name: "8ball"
}
