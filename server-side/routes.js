let routes = {},
    posts = {},
    uuidV4 = require('uuid/v4')

routes.get = (req, res) => res.send(posts)

routes.create = (req, res) => {
  posts[uuidV4()] = req.body
  res.status(201).json({ status: 'ok' })
}

routes.update = (req, res) => {
  let post = posts[req.params.id]
  if (!post) return res.send(404)

  posts[req.params.id] = req.body
  res.status(200).json({ status: 'ok' })
}

routes.del = (req, res) => {
  let post = posts[req.params.id]
  if (!post) return res.send(404)

  delete posts[req.params.id]
  res.status(200).send()
}

module.exports = routes
