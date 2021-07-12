module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    execute(message, args, client, Discord, discord){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Speler | 👥');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            var unmute = new Discord.MessageEmbed()
                .setTitle("User unmuted")
                .setDescription(`**${memberTarget.user}** is geunmute!`)
                .setTimestamp()
                .setFooter("| FleshNetwerk ", "https://cdn.discordapp.com/attachments/807245844213530695/860193553379885126/Banner_flesh.jpg");                      
            message.channel.send(unmute);
            var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "🔒╹moderator-only");
            ticketChannel.send(unmute);            
        } else{
            message.channel.send('User niet gevonden!');
        }
    }
}