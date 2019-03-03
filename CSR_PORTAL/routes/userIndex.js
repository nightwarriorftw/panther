const route = require('express').Router()

route.get('/', (req, res) => {
    res.render('user')
})

module.exports = route