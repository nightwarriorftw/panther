const route = require('express').Router()

route.get('/', (req, res) => {
    req.logOut()
    res.redirect('/login')
})

module.exports = route