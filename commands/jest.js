const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!args[0] || !args[1]) return message.channel.send("No napisz coś!").then(msg => msg.delete(3000));

    let arg = args.slice(1).join(" ");
    let procent = Math.floor((Math.random() * 101));

    message.channel.send("Jest "+ procent+"% "+`${args[0]}`+" między "+ `${message.author}`+ ", a "+ arg+"!");

}
 
module.exports.help = {
  name: "jest"
}