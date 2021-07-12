module.exports = {
    name: 'leden',
    description: "This command kicks a member!",
    execute(message, args, client, Discord, discord){
        var ledenTotal = message.guild.memberCount;
        var bots = message.guild.members.cache.filter(m => m.user.bot).size;
        var people = ledenTotal - bots;
        var online = message.guild.members.cache.filter(m => m.user.presence.status == "online" || m.user.presence.status == "dnd" || m.user.presence.status == "idle").size;
    
        var ledenEmbed = new Discord.MessageEmbed()
            .setTitle(`Leden`)
            .setColor("#006eff")
            .addField("Total members   |", ledenTotal, true)
            .addField("Members:", people, true)
            .setFooter("| FleshNetwerk ", "https://cdn.discordapp.com/attachments/807245844213530695/860193553379885126/Banner_flesh.jpg");   
        message.channel.send(ledenEmbed);
    }
}