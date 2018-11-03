const express = require('express');
const app = express(); 
const axios = require('axios');

const Telebot = require('telebot');
const bot = new Telebot(process.env.TOKEN);
const audios = require('./audios.json');

// recorre todas las posibilidades del array
for(let i = 0; i < audios.length; i++) {
  
  // por cada item, agrega un handler
  bot.on(`/a${i+1}`,function(msg) {
    return bot.sendVoice(msg.chat.id, audios[i].audio);
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
