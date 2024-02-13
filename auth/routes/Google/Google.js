const router = require('express').Router()
const passport = require('passport')

router.get(
    '/google',
    passport.authenticate('google', { scope: ['profile'] }),
    (req, res) => console.log('/google')
)

module.exports = router