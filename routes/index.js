const welcome = require('./welcome')
const all_post = require('./read')
const single_post = require('./read_single')
const add_post = require('./create')

module.exports = [
  welcome,
  all_post,
  single_post,
  add_post
]