module.exports = {
    name: 'apply',
    description: "Ping command!",
    execute(message, args, client, Discord, discord) {
        
        var categoryID = "853257122685911071";
        var staff = "853290866524553236";
        var person = message.author;

        var channelname = "Sollicitatie-" + message.author.username;

        var ticket = false;
        
        message.guild.channels.cache.forEach(channel => {
            
            if(channel.name.toLowerCase() === channelname.toLowerCase()) {
                ticket = true;
                return message.reply("Je hebt al een sollicitatie channel.").then(msg => msg.delete({timeout: 3000 }));
            }

        });
        
        if (ticket) return;

        var embed = new Discord.MessageEmbed()
            .setTitle(`Sollicitatie`)
            .setColor("#006eff")
            .addField("Hallo ", '${member.user.username}', "Uw sollicitatie ticket word aangemaakt!")
            .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");

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
                            .setTitle(`Sollicitatie`)
                            .setColor("#006eff")
                            .addField("Hallo ", '${member.user.username}', "Vul de vragen in om te solliciteren!")
                            .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");

                        var vraag1 = new Discord.MessageEmbed()
                            .setTitle('Vraag 1')
                            .setColor("#006eff")
                            .setDescription("Wat is je discord naam?")
                            .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");

                        var vraag2 = new Discord.MessageEmbed()
                            .setTitle('Vraag 2')
                            .setColor("#006eff")
                            .setDescription("Je volledige naam")
                            .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");
                        
                        var vraag3 = new Discord.MessageEmbed()
                            .setTitle('Vraag 3')
                            .setColor("#006eff")
                            .setDescription("Je geboorte datum?")
                            .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");

                        var vraag4 = new Discord.MessageEmbed()
                            .setTitle('Vraag 4')
                            .setColor("#006eff")
                            .setDescription("Je E-Mail adres")
                            .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");
                        
                        var vraag5 = new Discord.MessageEmbed()
                            .setTitle('Vraag 5')
                            .setColor("#006eff")
                            .setDescription("Stel jezelf voor")
                            .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");

                        var vraag6 = new Discord.MessageEmbed()
                            .setTitle('Vraag 6')
                            .setColor("#006eff")
                            .setDescription("Wat is je motivatie om staff te worden op deze server?")
                            .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");
                        
                        var vraag7 = new Discord.MessageEmbed()
                            .setTitle('Vraag 7')
                            .setColor("#006eff")
                            .setDescription("Waarom jij en niet iemand anders?")
                            .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");

                        var vraag8 = new Discord.MessageEmbed()
                            .setTitle('Vraag 8')
                            .setColor("#006eff")
                            .setDescription("Ervaring met andere Discord / Minecraft servers")
                            .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");
                        
                        var vraag9 = new Discord.MessageEmbed()
                            .setTitle('Vraag 9')
                            .setColor("#006eff")
                            .setDescription("Je pluspunten")
                            .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");
                        
                        var vraag10 = new Discord.MessageEmbed()
                            .setTitle('Vraag 10')
                            .setColor("#006eff")
                            .setDescription("Je minpunten")
                            .setFooter("Copyright © | Forum voor Democratie 2021", "https://cdn.discordapp.com/attachments/807245844213530695/853254859268947968/ezgif-7-8d9d8c257f24.gif");

                        settedParent.send(message.author.id);
                        settedParent.send(embedParent);
                        settedParent.send(vraag1);

                        settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord =>{
                            var antwoord1 = antwoord.first();;
                            settedParent.send(vraag2);

                            settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord =>{
                                var antwoord2 = antwoord.first();;
                                settedParent.send(vraag3);

                                settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord =>{
                                    var antwoord3 = antwoord.first();;
                                    settedParent.send(vraag4);

                                    settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord =>{
                                        var antwoord4 = antwoord.first();;
                                        settedParent.send(vraag5);

                                        settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord =>{
                                            var antwoord5 = antwoord.first();;
                                            settedParent.send(vraag6);

                                            settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord =>{
                                                var antwoord6 = antwoord.first();;
                                                settedParent.send(vraag7);

                                                settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord =>{
                                                    var antwoord7 = antwoord.first();;
                                                    settedParent.send(vraag8);

                                                    settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord =>{
                                                        var antwoord8 = antwoord.first();;
                                                        settedParent.send(vraag9);
                                                        
                                                        settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord =>{
                                                            var antwoord9= antwoord.first();;
                                                            settedParent.send(vraag10);

                                                            settedParent.awaitMessages(s => s.author.id == message.author.id, {max:1}).then(antwoord =>{
                                                                var antwoord10= antwoord.first();;
    

                                                                var uitkomst = new discord.MessageEmbed()
                                                                    .setTitle("Bedankt voor het invullen")
                                                                    .setColor("#006eff")
                                                                    .setTimestamp()
                                                                    .setDescription(`**Vraag 1:** \n${antwoord1}\n\n**Vraag 2:** \n${antwoord2}\n\n**Vraag 3:** \n${antwoord3}\n\n**Vraag 4:** \n${antwoord4}\n\n**Vraag 5:** \n${antwoord5}\n\n**Vraag 6:** \n${antwoord6}\n\n**Vraag 7:** \n${antwoord7}\n\n**Vraag 8:** \n${antwoord8}\n\n**Vraag 9:** \n${antwoord9}\n\n**Vraag 10:** \n${antwoord10}\n\n`);

                                                                settedParent.bulkDelete(20).then(
                                                                    settedParent.send(uitkomst)
                                                                )
                                                            })    
                                                        })    
                                                    })
                                                })
                                            })
                                        })
                                    })
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