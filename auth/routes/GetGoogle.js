const currentUser = require('./CurrentUser')
const router = require('express').Router()

router.get('/user', currentUser, (req, res) => {
    res.send(req.currentUser || {
        message: 'You must sign in'
    })
})

module.exports = router
