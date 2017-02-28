let routes = {},
    posts = [],
    uuidV4 = require('uuid/v4')

let findPost = (id) => {
  let post = posts.filter((post) => post.id == id)[0]
  if (!post) return undefined
  return post
}

routes.getAll = (req, res) => res.send(posts)

routes.get = (req, res) => {
  let post = findPost(req.params.id)
  if (!post) return res.status(404).json({message: 'Post not found'})

  res.status(200).json(post)
}

routes.create = (req, res) => {
  id = uuidV4()

  posts.push({
    id: id,
    name: req.body.name,
    description: req.body.description,
  })

  location = req.protocol + '://' + req.get('host') + '/api/posts/' + id;

  res.status(201).location(location).json({ status: 'ok' })
}

routes.update = (req, res) => {
  let post = findPost(req.params.id)
  if (!post) return res.status(404).json({message: 'Post not found'})

  post.name = req.body.name
  post.description = req.body.description

  res.status(200).json({ status: 'ok' })
}

routes.delete = (req, res) => {
  let post = findPost(req.params.id)
  if (!post) return res.status(404).json({message: 'Post not found'})

  posts.splice(posts.indexOf(post), 1);
  res.status(200).send()
}

module.exports = routes
