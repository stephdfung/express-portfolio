const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World! - update')
})

app.get('/about', function (req, res) {
  res.send('This is the about page - update')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
