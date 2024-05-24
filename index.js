// Initialize dotenv
require('dotenv').config();

// Discord.js versions ^13.0 require us to explicitly define client intents
const { Client, GatewayIntentBits, Events  } = require('discord.js');
const client = new Client({ intents:[
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
    // GuildMessages
    // GatewayIntentBits.Guilds,
    // GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    // GatewayIntentBits.MessageContent
] });

client.login(process.env.CLIENT_TOKEN).then(res => {
    console.log('jana', res)
});

const campingDate = new Date('June 21, 2024')

client.on('ready', () => {
client.channels.fetch(
    '1238917878745534578'
).then(channel => {
    const oneDay = 24 * 60 * 60 * 1000;
    var curr = new Date(); 
    var daysLeft = Math.round(Math.abs((campingDate - curr) / oneDay));

    channel.send(`How do you do fellow kids?\nThere is ${daysLeft} days until our camping trip!\nBuckle up, bucko!`);

    setInterval(() => {
        var curr = new Date(); 
        var daysLeft = Math.round(Math.abs((campingDate - curr) / oneDay));

        channel.send(`How do you do fellow kids?\nThere is ${daysLeft} days until our camping trip!\nBuckle up, bucko!`);
    }, oneDay)
})
 console.log(`Logged in as ${client.user.tag}!`);
});

// Log In our bot


// client.on('messageCreate', msg => {
//     // console.log(msg)
//     // You can view the msg object here with console.log(msg)
//     //  if (msg.content === 'Hello') {
//        msg.reply(`Hello ${msg.author.username}`);
//     //  }
// });



