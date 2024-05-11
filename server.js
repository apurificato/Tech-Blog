require('dotenv').config()
const sequelize = require('./db/client')
const express = require('express')
const routes = require('./routes')
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session')
const SequelizeStore = require("connect-session-sequelize")(session.Store)
const store = new SequelizeStore({ db: sequelize })
const {User} = require('./models')
const {Blog} = require('./models')

const app = express()
const PORT = process.env.PORT || 3333

app.use(express.urlencoded({ extended: false })) // Parse URL-encoded form data
app.use(express.json()) // Parse JSON data
app.use(session({
    secret: process.env.SESSION_SECRET,
    store,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000000 }
}))


// GET route for every file in public
app.use(express.static('public'))


// Create the engine instance
const hbs = exphbs.create({
    extname: '.hbs', // Set the file extension for handlebars templates
    defaultLayout: 'main', // Set the default layout template
    layoutsDir: path.join(__dirname, 'views/layouts'), // Set the directory for layout templates
    partialsDir: path.join(__dirname, 'views/partials') // Set the directory for partial templates
});

// Set up Handlebars middleware
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', routes)

sequelize.sync({force: false})
.then(()=>{
    app.listen(PORT,() => {
        console.log('Server running on port: ', PORT)

    })
})
