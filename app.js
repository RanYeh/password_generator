//-- Include packages & define related varibles
const express = require('express')
const exphbs = require('express-handlebars')

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

app.post('/', (req, res) => {
  console.log(req.body)
  res.render('index')
})

//-- Start and listen on the express server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})