module.exports = async (f, opt, next) => {
  f.route({
    method: 'DELETE',
    url: '/delete/:id',
    schema: {
      querystring: {
        id: { type: 'number' }
      },
    },
    handler: async (req, res) => {
      try {
        const { id } = req.params
        const data = await f.db.execute('DELETE FROM Posts WHERE id=?', [ id ])
        if (data) {
          return {
            message: 'remove data success',
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