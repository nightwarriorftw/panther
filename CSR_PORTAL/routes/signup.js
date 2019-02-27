const route = require('express').Router()

const {
     User 
    } = require('../db')

route.get('/', (req, res) => {
    if(req.user) {
        res.redirect('/profile')
    } else {
        res.render('signup')
    }
})

route.post('/', async (req, res) => {
    try {
        const user = User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        res.redirect('/login')
    } catch (e) {
        res.render('signup')
    }
})

module.exports = route