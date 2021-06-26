module.exports = {
    name: "close",
    aliases: [],
    permissions: [],
    description: "open a ticket!",
    async execute(message, args, client, Discord, discord) {
    var DeleteTicket = new Discord.MessageEmbed()
        .setTitle(`Sluiten`)
        .setColor("#006eff")
        .setDescription("Wil je het ticket sluiten?")
        .addField("Ja!", "✅")
        .addField("Nee!", "❌")
        .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");
    const reactionMessage = await message.channel.send(DeleteTicket);

    try {
      await reactionMessage.react("✅");
      await reactionMessage.react("❌");
    } catch (err) {
      channel.send("Error sending emojis!");
      throw err;
    }

    const collector = reactionMessage.createReactionCollector(
      (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
      { dispose: true }
    );
    var embedCreateTicket = new Discord.MessageEmbed()
        .setTitle("Ticket closed")
        .setDescription(`Het ticket **#${message.channel.name}** is gesloten`)
        .setTimestamp()
        .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");
    var Sluitenover = new Discord.MessageEmbed()
        .setTitle(`Sluiten`)
        .setColor("#006eff")
        .setDescription("Het ticket sluit over 5 secondes!")
        .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");
    collector.on("collect", (reaction, user) => {
      switch (reaction.emoji.name) {
        case "❌":
          message.channel.bulkDelete(2);
          break;
        case "✅":
          message.channel.send(Sluitenover);
          var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "🔒╹moderator-only");
          if (!ticketChannel) return message.reply("Kanaal bestaat niet");
          ticketChannel.send(embedCreateTicket);
          setTimeout(() => message.channel.delete(), 5000);
          break;
      }
    });
    
    }
}