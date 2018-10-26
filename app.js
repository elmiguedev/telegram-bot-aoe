const Telebot = require('telebot');
const bot = new Telebot('737936377:AAHdVWKXkbg-KX4r5-TbtHCUDnWuQE463B4');
const audios = require('./audios.json');

bot.on('send',function(msg) {
    return bot.sendMessage('hola pa');
});



