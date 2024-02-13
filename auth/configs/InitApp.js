const express = require('express')
const app = express()

const start = async () => {
    try{
        app.listen( 3001, () => console.log('Auth service listening on port 3001'))

    } catch(err) {
        console.error(err)
    }
}

module.exports = start