const Discord = require('discord.js');

const prefix = "?";

var bot = new Discord.Client();

bot.on("ready", function() {

    console.log("Dog'Bot Cool !");
    bot.user.setActivity("?aide Bientot Disponnible.")
    bot.user.setStatus("idle")
})

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(6);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
};

bot.on('message', message => {

    if(message.content === prefix + "aide"){
        var aide_embed = new Discord.RichEmbed()
        .setColor("#000000")
        .setTitle("cette commande et en Preparation.")
        message.channel.sendMessage(aide_embed);
    }
});

bot.login(process.env.TOKEN);
