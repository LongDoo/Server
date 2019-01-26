module.exports = async (f, opt, next) => {
  f.get('/posts', async (req, res) => {
    const [rows, fields] = await f.db.query('SELECT * FROM Posts')
    return rows
  })
}