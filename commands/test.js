module.exports = {
    name: 'test',
    description: "This command kicks a member!",
    execute(message, args, client, Discord, discord){

        let button = new disbut.MessageButton()
        .setStyle('red')
        .setLabel('My First Button!') 
        .setID('click_to_function') 
        .setDisabled();
      
      message.channel.send('Hey, i am powered by https://npmjs.com/discord-buttons', button);
    }
}