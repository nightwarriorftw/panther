const route = require('express').Router()
const passport = require('passport')
const path = require('path')

const {
    User
} = require('../db')

route.get('/', (req, res) => {
    if(req.user) {
        res.redirect('/profile')
    } else {
        res.sendfile(path.join(__dirname, ".."))
    }
})

route.post('/', 
    passport.authenticate('local', {
        successRedirect: '/profile',
        failureRedirect: '/login'
    })
) 

module.exports = route