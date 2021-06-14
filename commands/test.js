module.exports = {
    name: 'test',
    description: "This command kicks a member!",
    execute(message, args, client, Discord, discord){

        let btn = new bot.disbut.MessageButton()
            .setStyle('red')
            .setLabel('AMONGUS !!! SO SUS !!!!')
            .setID('amogus');
        let msg = await message.channel.send('Click for AMOGUS 😳', {
            button: btn
      });
    }
}