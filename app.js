const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const trashTalkGenerator = require('./trashTalk_generator')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Express app are listening on port ${port}`)
})