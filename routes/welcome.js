module.exports = async (f, opt, next) => {
  f.get('/', async (req, res) => {
    return {
      data: {
        message: 'Welcome to news api, navigate to /posts for test your request'
      }
    }
  })
}