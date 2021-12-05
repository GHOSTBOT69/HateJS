require('dotenv').config({ path: 'process.env' })
const request = require('request');
const { Telegraf } = require('telegraf')
const axios = require('axios')

const bot = new Telegraf(process.env.BOT_TOKEN)

// Comandos

bot.command('teste', ctx => {
let testMessage = `Apenas teste`;
let pic = `https://telegra.ph/file/8d9a71b8f7bbcdb625b0f.jpg`
bot.telegram.sendPhoto(ctx.chat.id, pic, {
        caption: testMessage,
        reply_markup: {
            inline_keyboard: [
                [   {
                        text: "Nekos",
                        callback_data: 'nekos'
                    },
                    {
                        text: "Wall",
                        callback_data: 'wall'
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



bot.action('wall', ctx => {
  axios.get('https://nekos.life/api/v2/img/wallpaper')
    .then(res => {
      let la = res.data.url
      bot.telegram.sendPhoto(ctx.chat.id, la, {
            caption: `testando`})
    }).catch(e => {
      console.log(e);
    })
})
// teste 2

bot.command('wpp', ctx => {
let testMessage = `Apenas teste`;
axios.get('https://nekos.life/api/v2/img/wallpaper')
    .then(res => {
      let las = res.data.url
bot.telegram.sendPhoto(ctx.chat.id, las, {
        caption: testMessage,
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Proximo",
                        callback_data: 'walledit'
                    }
                ],
            ]
        }
    })
})
})

bot.action('walledit', ctx => {
  axios.get('https://nekos.life/api/v2/img/wallpaper')
    .then(res => {
      let lass = res.data.url
      bot.telegram.ExtraEditMessageMedia(ctx.chat.id, ctx.message.message_id, lass)
    })
})


// teste 
bot.command('boobs', ctx => {
    axios.get('https://nekos.life/api/v2/img/boobs')
    .then(res => { 
         let la = res.data.url
         ctx.replyWithAnimation(la)
    }).catch(e => {
         console.log(e);
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