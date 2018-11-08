const Discord = require('discord.js');

const prefix = "~";

var bot = new Discord.Client();

bot.on("ready", function() {

    console.log("Dog'Bot Cool !");
    bot.user.setActivity("~aide")
    bot.user.setStatus("dnd")
})

bot.on("message", message => {

    if(message.content === prefix + "aide"){
        var aide_embed = new Discord.RichEmbed()
        .setColor("#2EFE2E")
        .setTitle("comand aide.")
        .addField("~aide", "un probleme? un souci ? Dog`Bot sauras vous satisfaire")
        .addField("~clear", "efface ton historique au 36303630666")
        .addField("~infodogbot", "voici ma carte d'identiter meusieur l'agent !")
        .addField("~rep", "je fait perroquet integrer")
        .addField("~blague", "tu et fan de tunning ? tu t'apelle jacky ? alors casse toi en espagne !")
    }
});
bot.on("message", message => {

    if(message.content.startsWith(prefix + "clear")) {
        if(!message.guild.member(message.autor).hasPermission("MANAGE_MESSAGES")) return message.channel.send("pas de permission, pas de reconpence.");
    }
        let args = message.content.split(" ").slice(1);

        if(!args[0]) return message.channel.send("tu doit specifier un Nombre de message a effacer sinon sa morche po !")
        message.channel.bulkDelete(args[0]).then(() => {
            message.reply(`${args[0]} message Suprimer , je peut clear t'es historique aussi ;)`);
        })
})

bot.on('guildMemberRemove', member => {

    member.guild.channels.find("name", "✅ʙɪᴇɴᴠᴇɴᴜᴇ").send(`${member} Vien de partir *Ciao les enculado !*`)
    
 })

bot.on("message", message => {

    if(message.content === prefix + "infodogbot"){
        message.channel.send("Dog`Bot,12 ans, mange du papier en cour et le recrache sur ces camarade, je suis un bot. je suis un fou. je suis en connexion avec YqoshhBot *Malheureusement*. etre un bot ces un metier ne pas faire sont metier en et un autre, un default ? je dirait..... perfectionniste");
    }
})

bot.on("message", message => {
    if(message.content === prefix + "rep"){
     if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("t'as cru quoi ? que j'etais un chien facile ?");
     let repmessage = args.join(" ");
     message.channel.send(repmessage);
 }});

 bot.on("message", message => {
     if(message.content === prefix + "blague"){
         if(random ==1){
            message.channel.send(" Dieux: arret t'es connerie Eve..    Eve: https://pbs.twimg.com/media/DMR5FaZWAAIMA71.jpg");
         }
         if(random ==2){
             message.channel.send("le Samedi soir, j'ai crees l'alcool. Le dimanche matin, j'ai crees le Vomi.");
        }
        if(random ==3){
             message.channel.send("une fille dans ma licence s'appelle clementine et a chaque fois quel marche jlui dit Heee t presser ? g 21 ans.");
        }
        if(random ==4){
             message.channel.send("deux patate discute, une dit a l'autre<<Tu pense qu'un jour on pourras vivre sans avoir la peur de se faire eplucher?>> l'autre repond <<patate que oui.....Patate que non>>");
        }
        if(random ==5){
             message.channel.send("- Bonjour j'aimerais changer de nom. - Oui bien sûr monsieur, vous vous appellez comment ? Je m'appelle Jacques Leconard. - Et vous voudriez vous appeller comment ? J'aimerais m'appeller Paul Leconard.");
        }
        if(random ==6){
             message.channel.send("les maisons ne chuchote pas elles mur mur");
        }
     }
 })
 bot.login(process.env.TOKEN);
