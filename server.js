const express = require('express');
const app = express(); 
const axios = require('axios');

const Telebot = require('telebot');
const bot = new Telebot(process.env.TOKEN);
const audios = require('./audios.json');
const responses = require('./responses');

const tauntsCount = 42;

// recorre todas las posibilidades del array
for(let i = 0; i <= tauntsCount; i++) {
  
  // por cada item, agrega un handler
  bot.on(`/a${i+1}`,function(msg) {
    //return bot.sendVoice(msg.chat.id, audios[i].audio);
    return bot.sendVoice(msg.chat.id, `./audios/spanish/${i+1}.opus`);
  }); 
  bot.on(`/a${i+1}s`,function(msg) {
    return bot.sendVoice(msg.chat.id, `./audios/spanish/${i+1}.opus`);
  }); 
  bot.on(`/a${i+1}e`,function(msg) {
    return bot.sendVoice(msg.chat.id, `./audios/english/${i+1}.opus`);
  }); 
  bot.on('/help', function(msg){
    return bot.sendMessage(msg.chat.id,responses.help);
  });
 
}

app.get('/', function(request, response) {
    response.send('aoe bot :D');
});
  
app.listen(process.env.PORT);    
bot.start();

setInterval(function() {
  //setInterval(() => {
  axios.get(process.env.PING).then(
    res => console.log(res.data)
  );
},1000 * 60);
