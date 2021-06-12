module.exports = {
    name: "close",
    aliases: [],
    permissions: [],
    description: "open a ticket!",
    async execute(message, args, client, Discord, discord) {
        
        const categoryID = "853257122685911071";

        if (message.channel.parentID == categoryID) {

            message.channel.delete();
        
            // Create embed.
            var embedCreateTicket = new Discord.MessageEmbed()
                .setTitle("Ticket closed")
                .setDescription(`Het ticket **#${message.channel.name}** is gesloten`)
                .setTimestamp()
                .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");
        
            // Channel voor logging
            var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "moderator-only");
            if (!ticketChannel) return message.reply("Kanaal bestaat niet");
        
            ticketChannel.send(embedCreateTicket);
        
        } else {
        
            message.channel.send("Gelieve dit command te doen bij een ticket.");
        
        }
    }
}