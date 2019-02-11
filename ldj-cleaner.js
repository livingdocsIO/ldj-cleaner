const LDJClient = require('./lib/ldj-client')
const client = new LDJClient(process.stdin)

client.on('message', (message) => {
  try {
    JSON.parse(message)
    console.log(message)
  } catch(e) {
    console.error(message)
  }
})
