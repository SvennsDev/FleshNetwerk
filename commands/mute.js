const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "This mutes a member",
    execute(message, args, client, Discord, discord) {
        const target = message.mentions.users.first();
        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Speler | 👥');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                var mute = new Discord.MessageEmbed()
                    .setTitle("User muted")
                    .setDescription(`**${memberTarget.user}** is gemute!`)
                    .setTimestamp()
                    .setFooter("| FleshNetwerk ", "https://cdn.discordapp.com/attachments/807245844213530695/860193553379885126/Banner_flesh.jpg");                      
                message.channel.send(mute);
                var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "🔒╹moderator-only");
                ticketChannel.send(mute);                
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            var mutetemp = new Discord.MessageEmbed()
                .setTitle("User tempmuted")
                .setDescription(`**${memberTarget.user}** is gemute voor ${ms(ms(args[1]))}!`)
                .setTimestamp()
                .setFooter("| FleshNetwerk ", "https://cdn.discordapp.com/attachments/807245844213530695/860193553379885126/Banner_flesh.jpg");                      
            message.channel.send(mutetemp);
            var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "🔒╹moderator-only");
            ticketChannel.send(mutetemp);

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            message.channel.send('User niet gevonden!');
        }
    }
}