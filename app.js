//-- Include packages & define related varibles
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()


//-- Set template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

//-- Set bodyParser


//-- Set static files



//-- Set routes
app.get('/', (req, res) => {
  res.render('index')
})


//-- Start and listen on the express server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})