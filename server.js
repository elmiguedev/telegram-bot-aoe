const express = require('express');
const app = express(); 
const path = require('path');

const Telebot = require('telebot');
const bot = new Telebot('785292812:AAG7ukQMvd0034TPKkZU8zwr_3TwGd7V2sU');
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
  
const listener = app.listen(process.env.PORT, function() {
    console.log('Your app is listening on port ' + listener.address().port);
    bot.start();
});
  