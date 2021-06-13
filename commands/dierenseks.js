module.exports = {
    name: 'dierenseks',
    description: "This command kicks a member!",
    execute(message, args, client, Discord, discord){
    
        var ledenEmbed = new Discord.MessageEmbed()
            .setTitle(`Seks met dieren?`)
            .setColor("#006eff")
            .setDescription("Wil je seks met dieren? Zo ja ga nu naar https://ztube.org/")
            .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");
        message.channel.send(ledenEmbed);
    }
}