module.exports = {
    name: 'botinfo',
    description: "This command kicks a member!",
    execute(message, args, client, Discord, discord){
        var serverEmbed = new Discord.MessageEmbed()
        .setTitle("DemoCratie Bot")
        .setColor("#006eff")
        .addField("BotInfo:", `discord.gg/stik`)
        .addField(` **Naam**:`, `${client.user.username}`)
        .addField(` **Versie**:`, `Pro`)
        .addField(` **Ping:**`, `${message.createdTimestamp- Date.now()} ms`)
        .addField(` **Developers:**`, `KnobbelPower`)
        .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");
        
    return message.channel.send(serverEmbed);
    }
}