const f = require('fastify')()
const bodyparser = require('fastify-formbody')
const cors = require('fastify-cors')
//
const db = require('./mysql')
const routes = require('./routes')

// Call the middleware here.
f.register(cors)
f.register(bodyparser)
f.decorate('db', db)

const start = async () => {
  try {
    routes.forEach(route => f.register(route))
    await f.listen(3000, (err, addr) => {
      console.log(`> Server start at ${addr}`)
    })
  } catch (err) {
    console.log(`Error: ${err}`)
  }
}

module.exports = start