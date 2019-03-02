const route = require('express').Router()
const passport = require('../passport')

const {
    User
} = require('../db')

route.post('/', 
    passport.authenticate('local', {
        successRedirect: '/profile',
        failureRedirect: '/'
    })
) 

module.exports = route