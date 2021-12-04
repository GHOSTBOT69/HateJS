require('dotenv').config({ path: 'process.env' })
const { Telegraf } = require('telegraf')
const axios = require('axios')
const nekolife = require('nekos.life');
const neko = new nekolife();



const bot = new Telegraf(process.env.BOT_TOKEN)

// Comandos

console.log(nekos)

async function nekof() {
    const GIF = await neko.sfw.neko();
}

nekof();

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