const {Telegraf} = require("telegraf");
const bot = new Telegraf('1711139509:AAF0DRyquFVQ2ZRtNlohS9eEWVPyEbpuNL4');
bot.start(ctx =>ctx.reply( `Hello ${ctx.update.message.from.first_name}`));
bot.on('text',(ctx)=>{
    ctx.reply(`${ ctx.update.message.text}`);
});
bot.launch()
    .then((res) => {
        console.log("Start");
    })
    .catch((err) => console.log(err));
