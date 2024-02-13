const router = require('express').Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.get(
    '/google/callback',
    passport.authenticate('google', {
        successRedirect: 'https://mymessage.com/',
        failureRedirect: '/login/failed',
    }),
    (req, res) => console.log('/google/callback')
)

module.exports = router