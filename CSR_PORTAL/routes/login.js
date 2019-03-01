const route = require('express').Router()
const passport = require('../passport')

const {
    User
} = require('../db')

route.get('/', (req, res) => {
    if(req.user) {
        res.redirect('/profile')
    } else {
        res.render('index')
    }
})

route.post('/', 
    passport.authenticate('local', {
        successRedirect: '/profile',
        failureRedirect: '/'
    })
) 

module.exports = route