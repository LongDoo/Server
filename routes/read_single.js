module.exports = async (f, opt, next) => {
  f.route({
    method: 'GET',
    url: '/post/:id',
    schema: {
      querystring: {
        id: { type: 'number' }
      },
      response: {
        404: {
          type: 'object',
          properties: {
            Error: { type: 'string' }
          }
        }
      }
    },
    handler: async (req, res) => {
      try {
        const [rows, fields] = await f.db.execute('SELECT * FROM Posts WHERE id=?', [req.params.id])
        return rows[0]
      } catch (err) {
        res.code(404)
        return {
          Error: 'id not found.'
        }
      }
    }
  })
}