module.exports = {
    name: 'marcus',
    description: "This command kicks a member!",
    execute(message, args, client, Discord, discord){
    
        var ledenEmbed = new Discord.MessageEmbed()
            .setTitle(`Marcus`)
            .setColor("#006eff")
            .setDescription('MARCUSVOLGS https://www.youtube.com/channel/UCiQKw7P0zo-_RycNsLjOwPA \n @MarcusVlogsYo#9828')
            .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");
        message.channel.send(ledenEmbed);
    }
}