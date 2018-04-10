const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!args[0]) return message.channel.send("No napisz coś!").then(msg => msg.delete(3000));

    let hate = args.join(" ");
    let procent = Math.floor((Math.random() * 100));

    message.channel.send("Jest "+ procent+"% nienawiści między "+ `${message.author}`+ ", a "+ hate+"!");

}
 
module.exports.help = {
  name: "hate"
}