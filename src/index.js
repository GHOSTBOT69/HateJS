require('dotenv').config({ path: 'process.env' })
const { Telegraf } = require('telegraf')
const { fetchJson, fetchText } = require('./lib/fetcher')
const axios = require('axios')
const nekolife = require('nekos.life');
const neko = new nekolife();



const bot = new Telegraf(process.env.BOT_TOKEN)

// Comandos

let nekos = fetchJson(`https://nekos.life/api/v2/img/neko`, {method: 'get'})

console.log(nekos)

bot.command('teste', ctx => {
    console.log(ctx.from)
    let testMessage = `maconha`;
    bot.telegram.sendMessage(ctx.chat.id, testMessage, {
        reply_markup: {
            inline_keyboard: [
                [{
                        text: "nekos",
                        callback_data: 'neko'
                    },
                    {
                        text: "teste 2",
                        url: 'https://github.com/'
                    }
                ],

            ]
        }
    })
})


bot.action('neko', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "nada"
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