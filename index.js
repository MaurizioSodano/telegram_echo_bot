
require('dotenv').config();

const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)
bot.start((context) => {
	console.log('Servizio avviato...')
	context.reply('Servizio ECHO avviato')
})
bot.on('text', context=>{
	text=context.update.message.text
  	context.reply('Hai scritto: '+text)
})
bot.launch()