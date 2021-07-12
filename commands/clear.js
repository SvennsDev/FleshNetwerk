module.exports = {
    name: 'clear',
    description: "This command kicks a member!",
    async execute(message, args, client, Discord, discord){
        if(!args[0]) return message.reply("Geef een getal!");
        if(isNaN(args[0])) return message.reply("Geef een geldig getal op!");

        if(args[0] >  100) return message.reply("Je kan niet meer dan 100 berichten verwijderen!");
        if(args[0] < 1) return message.reply("Je moet meer dan 1 bericht verwijderen!");

        await message.channel.messages.fetch({limit: args[0]}).then(message =>{
            message.channel.bulkDelete(messages);
        });
    }
}