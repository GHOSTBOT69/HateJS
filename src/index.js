require('dotenv').config({ path: 'process.env' })
const Telegraf = require('telegraf')

// Client 
const bot = new Telegraf(process.env.BOT_TOKEN)

// Comandos
bot.start((ctx) => ctx.reply("Maconha"))


const startBot = async () => {
    try {
        await bot.launch()
        console.log('Bot iniciado')
    } catch(error) {
        console.error(error)
    }
}

startBot()