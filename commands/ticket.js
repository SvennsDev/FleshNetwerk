module.exports = {
    name: "ticket",
    aliases: [],
    permissions: [],
    description: "open a ticket!",
    async execute(message, args, client, Discord, discord) {
      const channel = await message.guild.channels.create(`ticket: ${message.author.username}`);
      
      channel.setParent("853257122685911071");
  
      channel.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
        SEND_MESSAGE: false,
        VIEW_CHANNEL: false,
      });
      channel.updateOverwrite(message.guild.roles.cache.find(x => x.name === 'Wout | 👮'), {
        SEND_MESSAGE: true,
        VIEW_CHANNEL: true,
        CREATE_INSTANT_INVITE: false,
      });
      channel.updateOverwrite(message.author.id, {
        SEND_MESSAGE: true,
        VIEW_CHANNEL: true,
        CREATE_INSTANT_INVITE: false,
      });

      var TicketCreate = new Discord.MessageEmbed()
        .setTitle(`Hallo ${message.author.nickname},`)
        .setDescription('Onze staffleden zullen u zo snel mogelijk voorzien van support. \n Wil je je ticket sluiten type **!close**.')
        .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");

      const reactionMessage = await channel.send(TicketCreate);

  
      const collector = reactionMessage.createReactionCollector(
        (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("KICK_MEMBERS"),
        { dispose: true }
      );
  
      var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "🔒╹moderator-only");
      if (!ticketChannel) return message.reply("Kanaal bestaat niet");

      const TicketMessage = new Discord.MessageEmbed()
        .setTitle(`Hallo ${message.author.username},`)
        .setDescription(`Uw ticket is aangemaakt ${channel}`)
        .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");

      message.channel
        .send(TicketMessage)
        .then((msg) => {
          setTimeout(() => msg.delete(), 4000);
          setTimeout(() => message.delete(), 3000);
        })
        .catch((err) => {
          throw err;
        });
    },
  };
  