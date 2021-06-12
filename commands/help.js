module.exports = {
    name: 'help',
    description: 'Maak een suggestie!',
    execute(message, args, client, Discord, discord){

         var textA = new Discord.MessageEmbed()
         .setTitle(`Bot commands`)
         .setColor("#007bff")
         .setDescription("\n")
         .addField("__Algemeen__", "!help - Geeft al de verschillende commands \n")
         .addField("__Informatie__", "!avatar - Stuur je eigen avatar.\n !suggestie - Type een suggestie. \n !ping - Zie hoeveel ping de bot heeft \n !serverstatus - Stuur de server status.\n !ticket - Maak een ticket aan\n !botinfo - Stuur de informatie van de bot \n !serverinfo - Stuur alle server info\n !leden - Laat zien hoeveel leden er zijn\n !knolpower - Knolpower\n !seks - Heb seks met de beste e-girls\n !sensatienazi - Wees een nazie\n !tosti - Tosti");
         
         var textB = new Discord.MessageEmbed()
         .setTitle(`__Staff__`)
         .setColor("#007bff")
         .setDescription("!announcement - Stuur een annoucement \n !ban - Ban iemand \n !clear - Verwijder berichten \n !kick - Kick een member. \n !giveaway - Maak een giveaway \n")
         .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");
         
         message.author.send(textA);
         message.author.send(textB);

         var reply = new Discord.MessageEmbed()
         .setTitle(`Help`)
         .setColor("#007bff")
         .setDescription("Alle help commands staan in je dm! :mailbox_with_mail:")
         .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");

         message.channel.send(reply);
     }
}