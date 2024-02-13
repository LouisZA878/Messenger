const router = require('express').Router()
const User = require('../../models/User')
const express = require('express')
const currentUser = require('../CurrentUser')
const jwt = require('jsonwebtoken')

router.get('/login/success', currentUser,(req, res) => {
    if(req.user){      
        User.findOne({ googleId: req.user.id })
            .then((data) => {
                if(data){
                    const token = jwt.sign({
                        success: true,
                        message: 'success',
                        user: req.user,
                    }, 'auth');
                    req.session.token = token;
                    
                }
                if(!data){
                    const newUser = new User({
                        googleId: req.user.id,
                        username: req.user.displayName
                    })
                    const token = jwt.sign({
                        success: true,
                        message: 'success',
                        user: req.user,
                    }, 'auth');
                    req.session.token = token;
                    newUser.save()
                }
                console.log(data)
                res.status(200).json(req.currentUser)
        })
        .catch(err => {
            console.log(err)
        })
    }
})

module.exports = router