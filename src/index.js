require('dotenv').config({ path: 'process.env' })
const request = require('request');
const { Telegraf } = require('telegraf')
const axios = require('axios')

const bot = new Telegraf(process.env.BOT_TOKEN)

// Comandos

bot.command('teste', ctx => {
let testMessage = `test`;
bot.telegram.sendMessage(ctx.chat.id, testMessage, {
        reply_markup: {
            inline_keyboard: [
                [{
                        text: "Nekos",
                        callback_data: 'nekos'
                    }
                ],
            ]
        }
    })
})

bot.action('nekos', ctx =>
    request({
        url: 'https://nekos.life/api/v2/img/wallpaper',
        json: true
      }, function(error, response, body) {
        ctx.replyWithDocument(body.url);
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