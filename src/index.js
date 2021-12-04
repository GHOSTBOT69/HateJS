require('dotenv').config({ path: 'process.env' })
const request = require('request');
const { Telegraf } = require('telegraf')
const axios = require('axios')
const neko = require("nekolife.js");
let nekoclient = new Neko.Client();
const bot = new Telegraf(process.env.BOT_TOKEN)

// Comandos


bot.command("nekos", (ctx) =>
    request({
        url: 'https://nekos.life/api/v2/img/neko',
        json: true
      }, function(error, response, body) {
        ctx.replyWithPhoto(body.url);
    })
);



const startBot = async () => {
    try {
        await bot.launch()
        console.log('Bot iniciado')
    } catch(error) {
        console.error(error)
    }
}

startBot()