const db = require('../mysql')

module.exports = async (f, opt, next) => {
  f.get('/posts', async (req, res) => {
    const [rows, fields] = await db.query('SELECT * FROM Posts')
    return rows
  })
}