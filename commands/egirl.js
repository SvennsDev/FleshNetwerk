module.exports = {
    name: 'applyegirl',
    description: "Ping command!",
    execute(message, args, client, Discord, discord) {
        
        var categoryID = "853257122685911071";
        var staff = "853290866524553236";
        var person = message.author;

        var channelname = "egirl-applicatie-" + message.author.username;

        var ticket = false;
        
        message.guild.channels.cache.forEach(channel => {
            
            if(channel.name.toLowerCase() === channelname.toLowerCase()) {
                ticket = true;
                return message.reply("Je hebt al een egirl applicatie channel.").then(msg => msg.delete({timeout: 3000 }));
            }

        });
        
        if (ticket) return;

        var embed = new Discord.MessageEmbed()
            .setTitle(`Egirl Applicatie`)
            .setColor("#006eff")
            .setDescription(`Hallo ${message.author.username},Uw egirl applicatie ticket word aangemaakt!`)
            .setFooter("| FleshNetwerk ", "https://cdn.discordapp.com/attachments/807245844213530695/860193553379885126/Banner_flesh.jpg");   

        message.channel.send(embed).then(msg => msg.delete({timeout: 3000 }));

        message.guild.channels.create(channelname, {type: 'text'}).then(
            (createdChannel) => {
                createdChannel.setParent(categoryID).then(
                    (settedParent) => {

                        settedParent.updateOverwrite(message.guild.roles.cache.find(role => role.name === "@everyone"), {
                            SEND_MESSAGES: false,
                            VIEW_CHANNEL: false
                        }
                        )
                        
                        settedParent.updateOverwrite(message.author.id, {
                            SEND_MESSAGES: true,
                            VIEW_CHANNEL: true,
                            CREATE_INSTANT_INVITE: false,
                            READ_MESSAGE_HISTORY: true
                        }
                        )

                        settedParent.updateOverwrite(message.guild.roles.cache.get(staff), {
                            SEND_MESSAGES: true,
                            VIEW_CHANNEL: true,
                            CREATE_INSTANT_INVITE: false,
                            READ_MESSAGE_HISTORY: true
                        }
                        )

                        var embedParent = new Discord.MessageEmbed()
                            .setTitle(`Egirl applicatie`)
                            .setColor("#006eff")
                            .addField("Hallo ", `${message.author.username}`, "Vul de vragen in om de egirl rank te ontvangen!")
                            .setFooter("| FleshNetwerk ", "https://cdn.discordapp.com/attachments/807245844213530695/860193553379885126/Banner_flesh.jpg");   

                        var vraag1 = new Discord.MessageEmbed()
                            .setTitle('Vraag 1')
                            .setColor("#006eff")
                            .setDescription("Wat is je discord naam?")
                            .setFooter("| FleshNetwerk ", "https://cdn.discordapp.com/attachments/807245844213530695/860193553379885126/Banner_flesh.jpg");   

                        var vraag2 = new Discord.MessageEmbed()
                            .setTitle('Vraag 2')
                            .setColor("#006eff")
                            .setDescription("Gender?")
                            .setFooter("| FleshNetwerk ", "https://cdn.discordapp.com/attachments/807245844213530695/860193553379885126/Banner_flesh.jpg");   
                        
                        var vraag3 = new Discord.MessageEmbed()
                            .setTitle('Vraag 3')
                            .setColor("#006eff")
                            .setDescription("Waarom jij en niet iemand anders?")
                            .setFooter("Copyright © | FleshNetwerk 2021", "https://cdn.discordapp.com/attachments/807245844213530695/860193553379885126/Banner_flesh.jpg");

                        settedParent.send(embedParent);
                        settedParent.send(vraag1);

                        settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord =>{
                            var antwoord1 = antwoord.first();;
                            settedParent.send(vraag2);

                            settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord =>{
                                var antwoord2 = antwoord.first();;
                                settedParent.send(vraag3)
                                
                                settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord =>{
                                    var antwoord3 = antwoord.first();;
                                    
                                    var uitkomst = new Discord.MessageEmbed()
                                        .setTitle("Bedankt voor het invullen")
                                        .setColor("#006eff")
                                        .setFooter("Copyright © | FleshNetwerk 2021", "https://cdn.discordapp.com/attachments/807245844213530695/860193553379885126/Banner_flesh.jpg")
                                        .setTimestamp()
                                        .setDescription(`**Vraag 1:** \n${antwoord1}\n\n**Vraag 2:** \n${antwoord2}\n\n**Vraag 3:** \n${antwoord3}\n\n`);
                                
                                    settedParent.bulkDelete(4).then(
                                        settedParent.send(uitkomst)
                                    )
                                })
                            })                            
                        })

                        settedParent.send(`${person}, <@&%{staff}>`).then(msg => msg.delete({timeout: 1000}));

                    }
                )
            }
        )


    }
}