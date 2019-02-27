const route = require('express').Router()
const { User } = require('../db')

route.get('/', (req, res) => {

    if(req.user) {
        res.render('profile', {user: req.user})
    } else {
        res.redirect('index')
    }
})

module.exports = route