module.exports = {
    name: "closetest",
    aliases: [],
    permissions: [],
    description: "open a ticket!",
    async execute(message, args, client, Discord, discord) {

    const reactionMessage = await message.channel.send("Thank you for contacting support!");

    try {
      await reactionMessage.react("🔒");
      await reactionMessage.react("⛔");
    } catch (err) {
      channel.send("Error sending emojis!");
      throw err;
    }

    const collector = reactionMessage.createReactionCollector(
      (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
      { dispose: true }
    );

    collector.on("collect", (reaction, user) => {
      switch (reaction.emoji.name) {
        case "🔒":
          message.channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
          break;
        case "⛔":
          message.channel.send("Deleting this channel in 5 seconds!");
          setTimeout(() => message.channel.delete(), 5000);
          message.reactions.remove()
          break;
      }
    });
    
    }
}