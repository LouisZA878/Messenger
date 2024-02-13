const router = require('express').Router()

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('https://mymessage.com/sigin/')
})

module.exports = router