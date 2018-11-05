const express = require('express');
const app = express(); 
const axios = require('axios');

const Telebot = require('telebot');
const bot = new Telebot(process.env.TOKEN);
const audios = require('./audios.json');
const helpText = `
1	Yes.
2	No.
3	Food please.
4	Wood please.
5	Gold please.
6	Stone please.
7	Ahh!
8	All hail, king of the losers!
9	Ooh!
10	I'll beat you back to Age of Empires.
11	(Herb laugh)
12	AGH, He rushed.
13	Sure, blame it on your ISP.
14	Start the game already!
15	Don't point that thing at me!
16	Enemy sighted!
17	It is good to be the king.
18	Monk! I need a monk!
19	Long time, no siege.
20	My granny could scrap better than that.
21	Nice town, I'll take it.
22	Quit touching me!
23	Raiding party!
24	Dadgum.
25	Eh, smite me.
26	The wonder, the wonder, the... no!
27	You played two hours to die like this?
28	Yeah, well, you should see the other guy.
29	Roggan.
30	Wololo.
31	Attack an enemy now.
32	Cease creating extra villagers.
33	Create extra villagers.
34	Build a navy.
35	Stop building a navy.
36	Wait for my signal to attack.
37	Build a wonder.
38	Give me your extra resources.
39	(Ally sound)
40	(Enemy sound)
41	(Neutral sound)
42	What age are you in?
`;

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
    return bot.sendMessage(msg.chat.id,helpText);
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
