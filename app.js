const TelegramBot = require('node-telegram-bot-api');

const token = '5033031418:AAE6qOdTV4kJP6WaOz8ZCJctt8IlSpMqn-w';

const bot = new TelegramBot(token, { polling: true });


console.log(bot);