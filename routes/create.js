module.exports = async (f, opt, next) => {
  f.route({
    method: 'POST',
    url: '/create',
    schema: {
      querystring: {
        title: { type: 'string' },
        excerpt: { type: 'string' },
        content: { type: 'string' },
        photo: { type: 'string' },
      },
    },
    handler: async (req, res) => {
      try {
        const {title, excerpt, content, photo} = req.body
        const data = await f.db.execute(`
          INSERT INTO Posts(title, excerpt, content, photo)
          VALUE(?, ?, ?, ?)`, [title, excerpt, content, photo])
        if (data) {
          return {
            message: 'add data success',
            status: data
          }
        } else {
          throw err
        }
      } catch (err) {
        res.code(400)
        return {
          error: err
        }
      }
    }
  })
}