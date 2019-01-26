module.exports = async (f, opt, next) => {
  f.post('/post', async (req, res) => {
    try {
      const {title, excerpt, content, photo} = req.body
      if (photo == undefined) {
        const photo = null
      }
      const data = await db.execute(`
        INSERT INTO Posts(title, excerpt, content, photo)
        VALUE(?, ?, ?, ?)`, [title, excerpt, content, photo])
      return {
        message: 'add data success',
        status: data
      }
    } catch (err) {
      res.code(400)
      return {
        error: err
      }
    }
  })
}