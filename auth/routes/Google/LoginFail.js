const router = require('express').Router()
const passport = require('passport')
const User = require('../../models/User')

router.get('/login/failed', (req, res) => {
    res.status(401).json({
        success: false,
        message: 'failure'
    })
})
module.exports = router