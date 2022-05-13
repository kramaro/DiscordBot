const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjY0MzEyMjUzNjU4NjkzNjM0.XhVQqQ.gdRdVrbLWZELvLEnXAotJIxFGes';

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('This bot is online!');
})


// message.repy(''); - @ user with reply
// message.channel.sendMessag(''); - reply in channel that command was given
bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'help':
            message.channel.sendMessage('__**Commands Available**__\n clear: !clear (num) - Clears a specific number of messages.\n disappoint: Become disappointed in yourself.\n help: You are already here? \n info: !info (WALL-E) (version) - Displays info on requested item.\n ping: Pong!\n tts: !tts (word) - Text-to-speach on whatever word you would like.')
            break;
        case 'ping':
            message.channel.sendMessage('pong!');
            break;
        case 'disappoint':
            message.channel.sendMessage('https://steamdb.info/calculator/');
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.sendMessage('Version 1.0.1');
            }
            else if(args[1] === 'WALL-E'){
                message.channel.sendMessage('I was created 1/7/2020');
            }
            else{
                message.channel.sendMessage('Enter "version" or "WALL-E" after !info');
            }
            break;
        case 'clear':
            if(!args[1]) return message.reply('Enter number of messages to delete after !clear.')
            message.channel.bulkDelete(args[1]);
            break;
        case 'tts':
            if(!args[1]) return message.reply('Enter word after !tts.')
            if(args[2]) return message.reply('tts can only take one word for now.')
            message.channel.sendMessage(args[1], {tts: true});
            break;
    }
})

bot.login(token);