const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      routes = require('./routes')

app.use(bodyParser.json({ type: 'application/json' }))
app.use(express.static('client-side'))

app.get('/api/posts', routes.get)
app.post('/api/posts', routes.create)
app.put('/api/posts/:id', routes.update)
app.del('/api/posts/:id', routes.del)

app.listen(3000, () => console.log('listening'))
