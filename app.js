require('dotenv').config({ path: 'process.env' })
import { Telegraf } from 'telegraf'

// Client 
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.command('quit', (ctx) => {
  // Explicit usage
  ctx.telegram.leaveChat(ctx.message.chat.id)
})