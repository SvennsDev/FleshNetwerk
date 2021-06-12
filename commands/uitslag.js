module.exports = {
    name: 'uitslag',
    description: "This command kicks a member!",
    async execute(message, args, client, Discord, discord){

        var categoryID = "853257122685911071";

        var ticketUser = message.guild.member(message.mentions.users.first())

        if (message.channel.parentID !== categoryID) return message.reply("Oeps, dit is geen sollicitatie ticket.") && message.delete();

        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Jij kan dit niet doen") && message.delete();

        if (!ticketUser) return message.reply("Geen een persoon op") && message.delete();

        var kiesEmbed = new Discord.MessageEmbed()
            .setTitle("KIES")
            .setColor("#00bfff")
            .addField(`Aangenomen:`, '✅', false)
            .addField("Afgewezen:", "❌", false)
            .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");

        var redenEmbed = new Discord.MessageEmbed()
            .setTitle("Kies")
            .setColor("#00bfff")
            .addField(`Reden,`, `Vertel een reden`, false)
            .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");

        const filter = m => m.content;

        message.channel.send(kiesEmbed).then(async msg => {

            message.delete();

            var emoji = await promptMessage(msg, message.author, 60, ["✅", "❌"]);

            if (emoji === "✅") {

                message.channel.send(redenEmbed).then(msg => msg.delete({timeout: 10000 }));

                message.channel.awaitMessage(filter, {max:1, time: 10000 }).then(collected => {

                    var redenGood = collected.first();

                    var antwoordgood = new Discord.Message()
                        .setTitle("Aangenomen")
                        .setColor("#00ff00")
                        .addField("Wie:", `${TicketUser}`, false)
                        .addField("Reden:", `${redenGood}`, false)

                    message.channel.send(antwoordgood);
                    message.channel.bulkDelete(1);
                    message.channel.setTopic(`**Sollicitant**: ${TicketUser} **Status**: Aangenomen!`);                    

                })

            } else if(emoji === "❌") {

                message.channel.send(redenEmbed).then(msg => msg.delete({timeout: 10000 }));

                message.channel.awaitMessage(filter, {max:1, time: 10000}).then(collected => {

                    var redenBad = collected.first();

                    var antwoordBad = new Discord.Message()
                        .setTitle("Aangenomen")
                        .setColor("#00ff00")
                        .addField("Wie:", `${TicketUser}`, false)
                        .addField("Reden:", `${redenBad}`, false)

                    message.channel.send(antwoordBad);
                    message.channel.bulkDelete(1);
                    message.channel.setTopic(`**Sollicitant**: ${TicketUser} **Status**: Afgewezen!`);                    

                })

            }
        })
     
    async function promptMessage(message, author, time, reactions) {

        time *= 1000;

        for (const reaction of reactions) {
            await message.react(reaction);
        }
        
        const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

        return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
    }
    
    }

}