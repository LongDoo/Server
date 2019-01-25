const f = require('fastify')()
const bodyparser = require('fastify-formbody')
const cors = require('fastify-cors')
//
const index = require('./routes/index')
const posts = require('./routes/posts')
const post_id = require('./routes/post_id')
const add_post = require('./routes/add_post')

f.register(cors)
f.register(bodyparser)

f.register(index)
f.register(posts)
f.register(post_id)
f.register(add_post)

const start = async () => {
  try {
    await f.listen(3000, (err, addr) => {
      console.log(`> Server start at ${addr}`)
    })
  } catch (err) {
    console.log(`Error: ${err}`)
  }
}

start()