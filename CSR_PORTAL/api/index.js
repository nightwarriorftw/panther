const route = require('express').Router();

route.get('/pythonBot', (req, res) => {
    res.json(
        [
            {
                "title" : "Name of Event",
                "decsription" : "Some details about the event",
                "startTime" : "2019-02-27 09:43:29.826000",
                "host" : "CDK Global"
            },
            {
                "title" : "Name of Event",
                "decsription" : "Some details about the event",
                "startTime" : "2019-02-27 09:43:29.826000",
                "host" : "CDK Global"
            }
        ]
    )
})

module.exports = route