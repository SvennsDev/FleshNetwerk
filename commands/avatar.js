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
        .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");

    message.channel.send(embed);
    }
}