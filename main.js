const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

const memberCounter = require('./counters/counters')

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Epic im online!');
    memberCounter(client);
    client.user.setActivity('UwU', { type: 'LISTENING'});
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }else if (command == 'youtube'){
        client.commands.get('youtube').execute(message , args);
    }else if(command === 'mute') {
        client.commands.get('mute').execute(message , args);
    }else if(command === 'kick') {
        client.commands.get('kick').execute(message , args);
    }else if(command === 'ban') {
        client.commands.get('ban').execute(message , args);
    }else if(command === 'ping'){
        client.commands.get('ping').execute(message , args);
    }else if(command === 'command'){
        client.commands.get('command').execute(message, args, Discord);
    }
});

client.login('ODIzMzg3NzQ4NTQyNDQ3NjM2.YFgFmQ.NpZnTQ5Y5LOKpIIF62Ps1HiQxuA');
