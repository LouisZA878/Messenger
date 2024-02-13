// Module imports
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// Component Imports
const DB = require('./configs/DB')


//Middleware
const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE,PATCH',
    credentials: true
}))
app.use(express.json())


//Init configs
const start = async () => {
    try {
        DB()
        app.listen( 3002, () => console.log('Messages service listening on port 3002'))

    } catch (err) {
        console.error(err)
        console.log({
            err: err,
            message: 'Initializing Error - App.js'
        })
    }
}
start()

