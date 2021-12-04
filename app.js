require('dotenv').config({ path: 'process.env' })
import { Telegraf } from 'telegraf'

// Client 
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply("Maconha"))

bot.launch()