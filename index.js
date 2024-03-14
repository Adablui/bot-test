//السورس الاساسي لـ اظهار رابط موقعك في ريبل ات وجعل البوت الخاص فيك 24ساعة
const express = require("express")
const app = express();

app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});
//https://ra3dstudio.com CopyRight Codes
//كود اوتو رياكشن على اي بوت او شخص تحدد انت | Autoreaction to any bot or user
const { Client,Discord } = require('discord.js-selfbot-v13');
const client = new Client(); 
////
client.on('ready', () => {
  console.log(client.user.tag)
})
const {userAccount} = require("sphinx-run");
new userAccount(client, Discord).autoReaction({
    channel: '1103756812173455361',
    user: '824119071556763668',
    customBotId: ['824119071556763668']
});
client.login(process.env.token);
//https://ra3dstudio.com CopyRight Codes