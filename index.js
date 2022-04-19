const  aoijs = require("aoi.js");


const bot = new aoijs.Bot({
    token: "Tutaj token...",
    prefix: "pickle", //Discord Bot Prefix
    intents: "all" //Discord Intents
    })
    

 bot.onMessage() //Allows to execute Commands
 
  const loader = new aoijs.LoadCommands(bot)
  loader.load(bot.cmd,"./komendy/")
 console.log('wystartowano')
   
