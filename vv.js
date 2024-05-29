const cors = require("cors");
const { Telegraf } = require("telegraf");
const express = require('express');
const { readFileSync } = require("fs");
const { createServer } = require("https");
const TelegramBot = require("node-telegram-bot-api");
const TOKEN = "7160156902:AAHNBdVyvrds2hcOZc3uy571yobNeFPFt5c";
//const bot = new Telegraf(TOKEN);
const app = express(); // Добавьте это
const bot2 = new TelegramBot(TOKEN, {polling: true});
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3003; // Не забудьте определить PORT здесь

createServer(  app).listen(PORT, () => {
    console.log(`Server running on https://localhost:${PORT}/`)
});
const web_link =  "https://master--testvv777.netlify.app/";//"https://melodious-elf-1865fd.netlify.app/";



let chatId;
let queryId;

bot2.on('message', async (ctx) => {
    chatId = ctx.chat.id;
    console.log('MSg' + ctx.text)
    console.log('Data' + ctx.data)
    if (ctx.text === '/start') {
        await bot2.sendMessage(chatId, 'Выстроенный поток оплат от клиентов, и зарабатывать от 300к. руб. на своем призвании, помогая другим людям.\n' +
            '  \n' +
            'Сидите, и просто работаете с клиентами, без хаоса в голове и делах.\n' +
            '  \n' +
            'Забыли об апатии и выгорании.\n' +
            '  \n' +
            'Не думая о том:\n' +
            '  \n' +
            '"Как мне рассказать о себе так, чтобы этот рассказ продавал".\n' +
            '  \n' +
            '"Сделать бы как-нибудь так, чтобы все знали, что я крутой эксперт. Да еще и так, чтобы я цены поднимал(а) каждый месяц, потому что клиентов обрабатывать не успеваю".\n' +
            '  \n' +
            'Или мечта все-таки "сбыточная" и ваш ответ тут', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Узнай как', web_app: {url: web_link}}]
                ]
            }
        })


    }

    app.post('/notify-bot', async (req, res) => {
        const {queryId, products = [], totalPrice} = req.body;
        try {
            await bot2.answerWebAppQuery(queryId, {
                type: 'article',
                id: queryId,
                title: 'Успешная покупка',
                input_message_content: {
                    message_text: ` Поздравляю вы записались на консультацию `
                }
            })
            bot2.getchat
            await bot2.sendMessage(chatId, 'GO NEXT Step');


            return res.status(200).json({});
        } catch (e) {
            console.log(e);
            return res.status(500).json({})
        }
    })
})