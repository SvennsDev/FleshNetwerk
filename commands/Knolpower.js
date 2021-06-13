module.exports = {
    name: 'knolpower',
    description: "This command kicks a member!",
    execute(message, args, client, Discord, discord){
    
        var ledenEmbed = new Discord.MessageEmbed()
            .setTitle(`KNOLPOWER!`)
            .setColor("#006eff")
            .setDescription("GA NU NAAR https://www.knolpower.nl VOOR DE BESTE KNOLPOWER KLEDING")
            .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");
        message.channel.send(ledenEmbed);
    }
}