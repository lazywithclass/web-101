const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      uuidV4 = require('uuid/v4')

app.use(bodyParser.json({ type: 'application/json' }))

let posts = {}

app.get('/api/posts', (req, res) => res.send(posts))

app.post('/api/posts', (req, res) => {
  posts[uuidV4()] = req.body
  res.status(201).send()
})

app.put('/api/posts/:id', (req, res) => {
  let post = posts[req.params.id]
  if (!post) return res.send(404)

  posts[req.params.id] = req.body
  res.status(200).send()
})

app.del('/api/posts/:id', (req, res) => {
  let post = posts[req.params.id]
  if (!post) return res.send(404)

  delete posts[req.params.id]
  res.status(200).send()
})

app.listen(3000, () => console.log('listening'))
