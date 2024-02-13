// Module imports
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport')
const cookieSession = require('cookie-session')

// Component Imports
const DB = require('./configs/DB')
const InitApp = require('./configs/InitApp')
const passportSetup = require('./configs/passport')
const Producer = require('./producers/Producer')

// Import Routes
const callbackRoute = require('./routes/Google/Callback')
const googleRoute = require('./routes/Google/Google')
const loginFailRoute = require('./routes/Google/LoginFail')
const loginSuccRoute = require('./routes/Google/LoginSucc')
const logoutRoute = require('./routes/Google/Logout')
const getGoogleUserRoute = require('./routes/GetGoogle')

//Middleware
const app = express()

app.use(cors({
    origin: 'https://mymessage.com',
    methods: 'GET,POST,PUT,DELETE,PATCH',
    credentials: true
}))
app.set('trust proxy', true)
app.use(express.json())
app.use(express.urlencoded({
    extended: false
  }));  
app.use(cookieSession(
    {
        name:'session',
        keys:['auth'],
        maxAge: 24 * 60 * 60 * 100,
    }
))
app.use(passport.initialize())
app.use(passport.session())

//Init configs
const start = async () => {
    try {
        DB()
        // InitApp()
        app.listen( 3001, () => console.log('Auth service listening on port 3001'))

    } catch (err) {
        console.error(err)
        console.log({
            err: err,
            message: 'Initializing Error - App.js'
        })
    }
}
start()

// Routes
app.use('/api/auth', loginFailRoute)
app.use('/api/auth', loginSuccRoute)
app.use('/api/auth', logoutRoute)
app.use('/api/auth', googleRoute)
app.use('/api/auth', callbackRoute)
app.use('/api/auth', getGoogleUserRoute)



app.post('/sendLog', async ( req, res, next ) => {
    const producer = new Producer()

    await producer.publishMessage(req.body.logType, req.body.message)
    res.send()
})






