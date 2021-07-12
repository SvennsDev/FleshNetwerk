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
        .addField(`Door:`, message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setFooter("| FleshNetwerk ", "https://cdn.discordapp.com/attachments/807245844213530695/860193553379885126/Banner_flesh.jpg");   

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