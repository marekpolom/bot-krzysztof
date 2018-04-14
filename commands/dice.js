const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let arrayDice = new Array();

    if(args < 0) return message.channel.send("Błędne argumenty!").then(msg => msg.delete(3000));

    if(!args[0]){
        let dice = Math.floor((Math.random() * 6) + 1);
        message.channel.send(dice)
    }

    if(!args[1] && (isNaN(args[0]) == false)){
        dice = Math.floor((Math.random() * args[0]) + 1);

        message.channel.send(dice);
    }
    else if((isNaN(args[0]) == false) && (isNaN(args[1]) == false) && (!args[2])){
        for(var i=0; i < args[1]; i++){
            
            arrayDice[i] = Math.floor((Math.random() * args[0]) + 1);

            message.channel.send(arrayDice[i]);
        }
        arrayDice = [];
    }
    else if(isNaN(args) == true) return message.channel.send("Błędne argumenty!").then(msg => msg.delete(3000));
}
 
module.exports.help = {
  name: "dice"
}
