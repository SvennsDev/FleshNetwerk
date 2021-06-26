module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            var embedCreateTicket = new Discord.MessageEmbed()
                .setTitle("User gekickt")
                .setDescription(`**${memberTarget}** is gekickt!`)
                .setTimestamp()
                .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");    
          var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "🔒╹moderator-only");
          if (!ticketChannel) return message.reply("Kanaal bestaat niet");
          ticketChannel.send(embedCreateTicket);
            message.channel.send(embedCreateTicket);
        }else{
            message.channel.send(`Geef een speler op!`);
        }
    }
}