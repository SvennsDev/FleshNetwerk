module.exports = {
    name: 'afwijzen',
    description: "This command kicks a member!",
    async execute(message, args, client, Discord, discord){

        var categoryID = "853257122685911071";
        var ticketUser = message.guild.member(message.mentions.users.first())

        if (message.channel.parentID !== categoryID) return message.reply("Oeps, dit is geen sollicitatie ticket.") && message.delete();

        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Jij kan dit niet doen") && message.delete();

        if (!ticketUser) return message.reply("Geen een persoon op") && message.delete();

        var ledenEmbed = new Discord.MessageEmbed()
        .setTitle(`Afgewezen!`)
        .setColor("#ff0000")
        .addField("Wie:", `${ticketUser}`, false)
        .setFooter("Copyright © | FleshNetwerk 2021", "https://cdn.discordapp.com/attachments/807245844213530695/860193553379885126/Banner_flesh.jpg");   
        
        message.channel.send(ledenEmbed);
        message.channel.bulkDelete(1);
        message.channel.setTopic(`**Sollicitant**: ${ticketUser} **Status**: Afgewezen`);
        
    }

}