const {Telegraf} = require("telegraf");
require('dotenv').config();
const telegramToken = process.env.TOKEN ;
const bot = new Telegraf(telegramToken);
bot.start(ctx =>ctx.reply( `Hello ${ctx.update.message.from.first_name}`));
bot.on('text',(ctx)=>{
    ctx.reply(`${ ctx.update.message.text}`);
});
bot.launch()
    .then((res) => {
        console.log("Start");
    })
    .catch((err) => console.log(err));
