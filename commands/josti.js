module.exports = {
    name: 'josti',
    description: "This command kicks a member!",
    execute(message, args, client, Discord, discord){
   
        var ledenEmbed = new Discord.MessageEmbed()
            .setTitle(`Josti`)
            .setColor("#006eff")
            .setDescription("Sad Tosti is heel stiekem is hij gewoon Sad Josti")
            .setThumbnail('https://cdn.discordapp.com/emojis/851919025306468382.png?v=1')
            .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");
        message.channel.send(ledenEmbed);
    }
}