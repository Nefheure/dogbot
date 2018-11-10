const Discord = require('discord.js');

const prefix = "?";

var bot = new Discord.Client();

bot.on("ready", function() {

    console.log("Dog'Bot ok !");
    bot.user.setActivity("?aide Bientot Disponnible.")
    bot.user.setStatus("idle")
})

bot.on('message', message => {

    if(message.content === prefix + "aide"){
        var aide_embed = new Discord.RichEmbed()
        .setColor("#000000")
        .setTitle("cette commande et en Preparation.")
        message.channel.sendMessage(aide_embed);
    }
});

bot.on('message', message => {

    if(message.content === prefix + "youtube"){
        var youtube_embed = new Discord.RichEmbed()
        .setColor("#000000")
        .setTitle("Voici la chaine Youtube de **DogSterFX** si vous avez manquer une video courer la voir ! ")
        .addField("*lien :*", "https://www.youtube.com/channel/UCUm2bH23aU5SdqZfKX5nE_g")
        message.channel.sendMessage(youtube_embed);
    }
});

bot.login(process.env.TOKEN);

