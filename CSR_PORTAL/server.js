const express = require('express')
const session = require('express-session')
const path = require('path')

const {
    db
} = require('./db')

const app = express()

const passport = require('./passport')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(session ({
    secret: "bcwbchakjdhioehdiue13u43o-duih37e-di3j9",
    name: "MyCookieName"
}))

app.use(passport.initialize())
app.use(passport.session())

app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname, 'views')))


app.use('/', require('./routes/home'))
app.use('/signup', require('./routes/signup'))
app.use('/login', require('./routes/login')) 
app.use('/profile', require('./routes/profile'))
app.use('/logout', require('./routes/logout'))
app.use('/api', require('./api'))

db.sync()
.then(() => {
    app.listen(4000, () => {
        console.log("Server started on http://localhost:4000")
    })
})
.catch(console.error)