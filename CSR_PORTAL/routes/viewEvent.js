const route = require('express').Router()

route.get('/' , (req, res) => {
    res.render('viewEvent')
})

module.exports = route