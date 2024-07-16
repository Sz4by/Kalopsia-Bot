const config = require('./Structures/Config');
const Bot = require('./Structures/Bot');
const ms = require("ms");
const express = require('express')
const app = express();
const port = 6969

app.get('/', (req, res) => res.send('Odd is better.'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);

const bot = new Bot(config);

bot.start();

/* Error handling (Highly not recommend). To use it, remove the comments from the line below. */
// process.on('uncaughtException', console.error);
// process.on('unhandledRejection', console.error);
