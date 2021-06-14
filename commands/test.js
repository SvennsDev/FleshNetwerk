module.exports = {
    name: 'test',
    description: "This command kicks a member!",
    execute(message, args, client, Discord, discord){

    const{ MessageButton } = require('discord-buttons')

    const sayHello = new MessageButton()
      .setStyle('green')
      .setEmoji('851217562196246569')
      .setID('hello')

    const sayBye = new MessageButton()
      .setStyle('red')
      .setEmoji('851217449603956767')
      .setID('bye')

    helloEmbed = new Discord.MessageEmbed()
    .setTitle('Say hello or bye')
    .setColor("#9B72B4")
    message.channel.send({embed: helloEmbed, buttons: [sayHello, sayBye]})

    client.on(`clickButton`, async(button) => {

      if (button.clicker.user.bot) return;

      if (button.id == "hello") return button.channel.send(`Hello how are you? ${button.clicker.member}`)
      if (button.id == "bye") return button.channel.send('Bye have a great time!')
    
    })     
  }
}