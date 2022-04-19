const  aoijs = require("aoi.js");


const bot = new aoijs.Bot({
    token: "OTY1NzE0NjAzMzIzNTY4MTI4.Yl3Nzw.GvpN2bswQVR2guHsvSwux6O7w2o",
    prefix: "pickle", //Discord Bot Prefix
    intents: "all" //Discord Intents
    })
    

 bot.onMessage() //Allows to execute Commands
 
  const loader = new aoijs.LoadCommands(bot)
  loader.load(bot.cmd,"./komendy/")
 console.log('wystartowano')
   