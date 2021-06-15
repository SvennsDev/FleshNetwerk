module.exports = {
    name: 'banf',
    description: "This command kicks a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            var embedCreateTicket = new Discord.MessageEmbed()
            .setTitle("User verbannen")
            .setDescription(`**${memberTarget}**is verbannen!`)
            .setTimestamp()
            .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");    
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            var BanLog = message.member.guild.channels.cache.find(channel => channel.name === "🔒╹moderator-only");
            BanLog.send(embedCreateTicket);
            message.channel.send(`${memberTarget} is gebanned`);
        }else{
            message.channel.send(`Jij kan dit niet doen!`);
        }
    }
}