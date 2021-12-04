require('dotenv').config({ path: 'process.env' })
const Telegraf = require('telegraf')

// Client 
const bot = new Telegraf(process.env.BOT_TOKEN)

// Comandos
bot.start((ctx) => ctx.reply("Maconha"))

bot.launch()