//-- Include packages & define related varibles
const express = require('express')
const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password')

const app = express()

//-- Set template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

//-- Set bodyParser
app.use(express.urlencoded({ extended: true }))

//-- Set routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/password', (req, res) => {
  const options = req.body
  const password = generatePassword(options)
  res.render('index', { password, options })
})

//-- Start and listen on the express server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})