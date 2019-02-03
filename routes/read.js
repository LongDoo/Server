module.exports = async (f, opt, next) => {
  f.route({
    method: 'GET',
    url: '/posts',
    handler: async (req, res) => {
      const [rows, fields] = await f.db.query('SELECT * FROM Posts')
      return rows
    }
  })
}