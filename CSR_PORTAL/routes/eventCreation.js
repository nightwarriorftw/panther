const route = require('express').Router()

const {
    Event
} = require('../db')

route.post ('/', (req, res) => {
    try {
        const event = Event.create({
            name: req.body.name,
            hostname: req.body.hostname,
            requirement: req.body.requirement,
            description: req.body.description,
            location: req.body.location,
            date: req.body.date,
            category: req.body.category
        })
        res.redirect('/profile')
    } catch (e) {
        res.redirect('/')
    }
})

module.exports = route
