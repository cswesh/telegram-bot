require('dotenv').config()
const {TOKEN} = process.env
const telegramBot = require('node-telegram-bot-api')

const bot = new telegramBot(TOKEN, {polling:true})

bot.on('message',(message) => {
    // console.log(message.text);
    let chat_id = message.from.id;
//Middleware
    bot.sendMessage(chat_id,"hello from Node JS")

})

