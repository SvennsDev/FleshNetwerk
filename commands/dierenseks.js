module.exports = {
    name: 'dierenseks',
    description: "This command kicks a member!",
    execute(message, args, client, Discord, discord){
        var ledenTotal = message.guild.memberCount;
        var bots = message.guild.members.cache.filter(m => m.user.bot).size;
        var people = ledenTotal - bots;
        var online = message.guild.members.cache.filter(m => m.user.presence.status == "online" || m.user.presence.status == "dnd" || m.user.presence.status == "idle").size;
    
        var ledenEmbed = new Discord.MessageEmbed()
            .setTitle(`Seks met dieren?`)
            .setColor("#006eff")
            .setDescription("Wil je seks met dieren?", "Zo ja ga nu naar https://ztube.org/")
            .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");
        message.channel.send(ledenEmbed);
    }
}