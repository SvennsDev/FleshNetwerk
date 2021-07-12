const util = require('minecraft-server-util');

module.exports = {
    name: 'serverstatus',
    description: 'get information about a minecraft server',
    execute(message, args, client, Discord){
        if(!args[0] === undefined) args[0] = "play.fleshnetwerk.nl";
        if(!args[1] === undefined) args[1] = "25400";
        
        util.status('play.fleshnetwerk.nl', {port: parseInt('25400')}).then((response) =>{
            console.log(response);
            const embed = new Discord.MessageEmbed()
            .setColor('#00ee00')
            .setTitle('FleshNetwerk Server Status')
            .addFields(
                {name: 'Server IP', value: response.host},
                {name: 'Online Spelers', value: response.onlinePlayers},
                {name: 'Max Spelers', value: response.maxPlayers},
            )
            .setFooter("| FleshNetwerk ", "https://cdn.discordapp.com/attachments/807245844213530695/860193553379885126/Banner_flesh.jpg");   

            message.channel.send(embed)
        })
    }
}