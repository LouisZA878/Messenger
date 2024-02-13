const router = require('express').Router()
const passport = require('passport')
const User = require('../../models/User')

router.get('/login/failed', (req, res) => {
    res.status(401).json({
        success: false,
        message: 'failure'
    })
})
router.get('/login/success', (req, res) => {
    if(req.user){
        res.status(200).json({
            success: true,
            message: 'success',
            user: req.user,
            // cookies: req.cookies

        })
        
        User.findOne({ id: req.user.id })
            .then((data) => {
                if(data){
                    return
                }
                if(!data){
                    const newUser = new User({
                        id: req.user.id,
                        username: req.user.displayName,
                    data: {
                        followers: 0,
                        following: 0,
                        likes: 0
                    },
                    description: '',
                    notifications: [
                        {notify: `Signed up on ${new Date()}`}
                    ],
                    defaultIcon: req.user.photos[0].value,
                    icon: 0
        
                })
                
                    newUser.save()
                }
        })
        .catch(err => {
            console.log(err)
        })



    }

})

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('http://localhost:3000/auth/signin/')
})

router.get(
    '/google',
    passport.authenticate('google', { scope: ['profile'] }),
    (req, res) => console.log('/google')
)
router.get(
    '/google/callback',
    passport.authenticate('google', {
        successRedirect: 'http://localhost:3000/',
        failureRedirect: '/login/failed',
    }),
    (req, res) => console.log('/google/callback')
)
module.exports = router