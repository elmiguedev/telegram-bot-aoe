const express = require('express');
const app = express(); 
const axios = require('axios');

const Telebot = require('telebot');
const bot = new Telebot(process.env.TOKEN);
//const helpText = "1	Yes.\n2	No.\n3	Food please.\n4	Wood please.\n5	Gold please.\n6	Stone please.\n7	Ahh!\n8	All hail, king of the losers!\n9	Ooh!\n10	I'll beat you back to Age of Empires.\n11	(Herb laugh)\n12	AGH, He rushed.\n13	Sure, blame it on your ISP.\n14	Start the game already!\n15	Don't point that thing at me!\n16	Enemy sighted!\n17	It is good to be the king.\n18	Monk! I need a monk!\n19	Long time, no siege.\n20	My granny could scrap better than that.\n21	Nice town, I'll take it.\n22	Quit touching me!\n23	Raiding party!\n24	Dadgum.\n25	Eh, smite me.\n26	The wonder, the wonder, the... no!\n27	You played two hours to die like this?\n28	Yeah, well, you should see the other guy.\n29	Roggan.\n30	Wololo.\n31	Attack an enemy now.\n32	Cease creating extra villagers.\n33	Create extra villagers.\n34	Build a navy.\n35	Stop building a navy.\n36	Wait for my signal to attack.\n37	Build a wonder.\n38	Give me your extra resources.\n39	(Ally sound)\n40	(Enemy sound)\n41	(Neutral sound)\n42	What age are you in?";
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
    return msg.reply.text(responses.help);
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
