require('dotenv').config({ path: 'process.env' })
const { Telegraf } = require('telegraf')
const axios = require('axios')
const neko = require("nekolife.js");
let nekoclient = new Neko.Client();
const bot = new Telegraf(process.env.BOT_TOKEN)

// Comandos


let neko = await nekoclient.neko();
console.log(neko.neko);


bot.command('neko', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: GIF.url
    })

})


const startBot = async () => {
    try {
        await bot.launch()
        console.log('Bot iniciado')
    } catch(error) {
        console.error(error)
    }
}

startBot()