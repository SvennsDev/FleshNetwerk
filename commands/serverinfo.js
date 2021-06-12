const moment = require("moment");

module.exports = {
    name: 'serverinfo',
    description: "This command kicks a member!",
    execute(message, args, client, Discord, discord){
        var serverEmbed = new Discord.MessageEmbed()
        .setTitle("Forum voor Democartie")
        .setColor("#006eff")
        .addField("ServerInfo:", `discord.gg/stik`)
        .addField(` **Naam**:`, `Forum voor Democratie`)
        .addField(` **Eigenaar:**`, `@Brendan#4196`)
        .addField(` **Members**:`, `${message.guild.memberCount}`)
        .addField(` **Regio:**`, `Europa`)
        .addField(` **Aangemaakt:**`, `${moment(message.guild.createdAt).format('LL')}`)
        .addField(` **TextChannels:**`, `${message.guild.channels.cache.filter(chan => chan.type == "text").size}`)
        .addField(` **VoiceChannels:**`, `${message.guild.channels.cache.filter(chan => chan.type == "voice").size}`)
        .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");
        
    return message.channel.send(serverEmbed);
    }
}