const fetch = require('node-fetch')

setInterval(async () => {
  await fetch('https://glitch.com/edit/#!/luxurious-tulip-ticket?path=server.js%3A12%3A23').then(console.log('Pinged!'))
}, 240000)
