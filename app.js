const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));
app.use(express.static('public'))

app.get('/', function (req, res) {
  // res.send('Hello World! - update')
  res.render('index')
})

app.get('/about', function (req, res) {
  // res.send('This is the about page - update')
  res.render('about')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
