const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      routes = require('./routes')

app.use(bodyParser.json({ type: 'application/json' }))
app.use(express.static('client-side'))

app.get('/api/posts', routes.getAll)
app.get('/api/posts/:id', routes.get)
app.post('/api/posts', routes.create)
app.put('/api/posts/:id', routes.update)
app.delete('/api/posts/:id', routes.delete)

app.listen(3000, () => console.log('listening'))
