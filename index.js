const Discord = require('discord.js')
const client = new Discord.Client()
fs =require('fs')

// token is depricated np ;)
const token='ODQ4OTc0ODI2NTM3MzUzMjc3.YLUbaw.7LqUMngVyx19LyfUiTYOcdqZkNI'

client.on('ready',()=>{
    console.log('ready')
})

client.on('message',message=>{
    console.log(message.content)
    fs.appendFile('messagesContent.txt', message.content+'\n', function (err) {
        if (err) throw err;
        console.log('Updated!');
});
})

client.login(token)
