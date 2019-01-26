module.exports = async (f, opt, next) => {
  f.get('/post/id/:id', async (req, res) => {
    try {
      const [rows, fields] = await f.db.execute('SELECT * FROM Posts WHERE id=?', [req.params.id])
      if (rows.length == 0) throw err
      return rows
    } catch (err) {
      res.code(404)
      res.send({
        Error: 'id not found.'
      })
    }
  })
}