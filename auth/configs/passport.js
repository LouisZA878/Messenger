const passport = require('passport')


const GoogleStrategy = require('passport-google-oauth20').Strategy

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'https://mymessage.com/api/auth/google/callback'
},
    function(accessToken, refreshToken, profile, done) {

        return done(null, profile)
    }

))



passport.serializeUser((user,done) => {
    done(null, user)
})
passport.deserializeUser((user,done) => {
    done(null, user)
})


