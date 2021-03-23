module.exports = {
    name: 'command',
    description: "big command!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Rules')
        .setURL('https://youtube.com')
        .addFields(
            {name: 'Rule 1', value: 'Be Awesome'},
            {name: 'Rule 2', value: 'Be Awesome'},
            {name: 'Rule 3', value: 'Be Awesome'},
            {name: 'Rule 4', value: 'Be Awesome'}
        
        )
        .setImage('')
        .setFooter('Make sure to check out the rules channel');
        
        message.channel.send(newEmbed);
    }

    


}
   