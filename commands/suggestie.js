module.exports = {
    name: 'suggestie',
    aliases: ['suggest', 'suggesties'],
    permissions: [],
    description: 'Maak een suggestie!',
    execute(message, args, client, Discord, discord){
        const channel = message.guild.channels.cache.find(c => c.name === 'suggesties');
        if(!channel) return message.channel.send('Het suggestie kanaal is niet gevonden!');

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setTitle("Suggestie")
        .setColor("#007bff")
        .setDescription(messageArgs)
        .addField(`Door:`, message.author.nickname, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");

        channel.send(embed).then((msg) =>{
            msg.react('✅');
            msg.react('❌');
            msg.react('❓');
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}