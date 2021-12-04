require('dotenv').config({ path: 'process.env' })
const { Telegraf } = require('telegraf')
const axios = require('axios')
const nekolife = require('nekos.life');
const neko = new nekolife();

const bot = new Telegraf(process.env.BOT_TOKEN)

// Comandos

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

neko.nsfw.neko().then(neko => {console.log(neko.url);});

bot.action('neko', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: neko.url
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