module.exports = {
    name: 'tosti',
    description: "This command kicks a member!",
    execute(message, args, client, Discord, discord){
        var ledenTotal = message.guild.memberCount;
        var bots = message.guild.members.cache.filter(m => m.user.bot).size;
        var people = ledenTotal - bots;
        var online = message.guild.members.cache.filter(m => m.user.presence.status == "online" || m.user.presence.status == "dnd" || m.user.presence.status == "idle").size;
    
        var ledenEmbed = new Discord.MessageEmbed()
            .setTitle(`Tosti`)
            .setColor("#006eff")
            .setDescription("Tosti's zijn altijd sad", "Net zoals @Sad Tosti#8649")
            .setThumbnail('https://cdn.discordapp.com/emojis/851919025306468382.png?v=1')
            .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");
        message.channel.send(ledenEmbed);
    }
}