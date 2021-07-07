module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args, client, Discord, discord){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            var embedCreateTicket = new Discord.MessageEmbed()
                .setTitle("User gekickt")
                .setDescription(`**${memberTarget}** is gekickt!`)
                .setTimestamp()
                .setFooter("Copyright © | FleshNetwerk 2021", "https://cdn.discordapp.com/attachments/807245844213530695/860193553379885126/Banner_flesh.jpg");       
          var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "🔒╹moderator-only");
          if (!ticketChannel) return message.reply("Kanaal bestaat niet");
          ticketChannel.send(embedCreateTicket);
            message.channel.send(embedCreateTicket);
        }else{
            message.channel.send(`Geef een speler op!`);
        }
    }
}