module.exports = {
    name: 'avatar',
    description: "This command kicks a member!",
    execute(message, args, client, Discord, discord){
        var member = message.guild.member(message.mentions.users.first() || client.users.cache.get(args[0]) ||
        client.users.cache.find(user => user.username.toLowerCase() == args.join(" ").toLowerCase()) ||
        client.users.cache.find(user => user.tag.toLowerCase() == args.join(" ").toLowerCase()));

    if (!member) member = message.member;

    var embed = new Discord.MessageEmbed()
        .setTitle(`Avatar ${member.user.username}`)
        .setColor("#007bff")
        .setImage(member.user.displayAvatarURL({ dynamic: true, size: 4096}))
        .setFooter("| FleshNetwerk ", "https://cdn.discordapp.com/attachments/807245844213530695/860193553379885126/Banner_flesh.jpg");   

    message.channel.send(embed);
    }
}