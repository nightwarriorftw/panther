const route = require('express').Router()

const {
     User 
    } = require('../db')

route.get('/', (req, res) => {
    if(req.user) {
        res.redirect('/home')
    } else {
        res.render('signup')
    }
})

route.post('/', async (req, res) => {
    try {
        const user = User.create({
            name: req.body.name,
            number: req.body.number,
            email: req.body.email,
            address: req.body.address,
            pincode: req.body.pincode,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        res.redirect('/profile')
    } catch (e) {
        res.render('home')
    }
})

module.exports = route