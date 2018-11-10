const Discord = require('discord.js');

const prefix = "?";

var bot = new Discord.Client();

bot.on("ready", function() {

    console.log("Dog'Bot ok !");
    bot.user.setActivity("?aide")
    bot.user.setStatus("online")
})

bot.on('message', message => {

    if(message.content === prefix + "aide"){
        var aide_embed = new Discord.RichEmbed()
        .setColor("#000000")
        .setTitle("Voici la command **aide**")
        .addField("?youtube", "vous envoie un lien youtube vers la chaine de **DogSterFX**")
        .addField("?gfx", "Vous envoie un lien vers un GoogleForms Pour passer command")
        message.channel.sendMessage(aide_embed);
    }
});

bot.on('message', message => {

    if(message.content === prefix + "youtube"){
        var youtube_embed = new Discord.RichEmbed()
        .setColor("#000000")
        .setTitle("Voici la chaine Youtube de **DogSterFX** si vous avez manquer une video courrer la voir ! ")
        .addField("*lien :*", "https://www.youtube.com/channel/UCUm2bH23aU5SdqZfKX5nE_g")
        message.channel.sendMessage(youtube_embed);
    }
});

bot.on('message', message => {

    if(message.content === prefix + "gfx"){
        var gfx_embed = new Discord.RichEmbed()
        .setColor("#000000")
        .setTitle("Si vous voulez demander Une Banniere, Un Logo ou autre a **DogSterFX** tous se passe dans le lien ci-dessous !")
        .addField("*lien :*", "https://goo.gl/forms/JY0777g2zWOoGQR33")
        message.channel.sendMessage(gfx_embed);
    }
});

bot.login(process.env.TOKEN);
