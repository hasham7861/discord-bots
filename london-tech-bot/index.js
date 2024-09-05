const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');
const schedule = require('node-schedule');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,            // To manage guilds (servers)
        GatewayIntentBits.GuildMessages,     // To read messages in servers
        GatewayIntentBits.MessageContent,    // To read the content of messages
    ]
});

// client.once("ready", () => {
//     console.log(`Logged in as ${client.user.tag}`);

//     // // Schedule a job to run every day at 8 AM
//     // schedule.scheduleJob('0 8 * * *', () => {
//     //     callSomeFetchAndPostMethodForEvents();
//     // });

//     const channel = client.channels.cache.get('tech-london-bot#9883'); // Replace with your channel ID
//     if (channel) {
//         channel.send('This is a test event post!');
//     }
// })


// function scrapeMeetupWebAppForCodeTrackEvents(){
    //     // TODO: this will scrape the Meetup web app for CodeTrack events and return them in a list of events to be used to post in discord. Can use library like puppeteer to scrape the web app in headless mode.
    // }
    
    
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// Listening for messages
client.on('messageCreate', message => {
    // Ignore bot's own messages
    if (message.author.bot) return;

    // Respond to specific command
    if (message.content === '!ping') {
        message.channel.send('Pong!');
    }

    // Respond to a mention
    if (message.mentions.has(client.user)) {
        message.channel.send('You mentioned me!');
    }
});


client.login(process.env.DISCORD_TOKEN);

