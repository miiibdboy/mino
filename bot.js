const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("577660161129316362")
setInterval(function() {
channel.send(`YA 5OYA YA 5OYA RAS ITIR ANA MACHI BNADAM`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
