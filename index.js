// Reqs
require('dotenv').config({ path: 'process.env' })
const request = require('request');
const { Telegraf } = require('telegraf')
const axios = require('axios')
const { generateBigWaifu, randomSeed } = require('waifulabs');
const { join } = require('path');
const scat = require('scathach-api');

// Clients
const cooldown = new Set();
const { log, error } = require(join(__dirname, 'utils'));
const bot = new Telegraf(process.env.BOT_TOKEN)
const scathach = new scat();

// =============

// Comandos

bot.command('oral', ctx => {
         let orall = scathach.sex.oral()
         let lav = orall.url
         ctx.replyWithAnimation(lav)
    }).catch(e => {
         console.log(e);
   })





bot.command('waifu', async ctx => {
    if(cooldown.has(ctx.chat.id)) return;
    cooldown.add(ctx.chat.id);
    try{
        log(ctx);
        const waifu = await generateBigWaifu(randomSeed());
        await ctx.replyWithPhoto({
            source: Buffer.from(waifu.image, 'base64'),
            filename: 'waifu.png',
        });
    }catch(err){
        error(ctx);
        await ctx.reply('Error occurred').catch(() => {});
    }
    cooldown.delete(ctx.chat.id);
});

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