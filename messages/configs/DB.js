const mongoose = require('mongoose')


const start = async () => {
    try{
        mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('Conencted to Messages DB'))
        .catch(err => {
            console.error(err)
            return {
                err: err,
                message: 'Error initializing mongodb in Auth service - DB.js'
            }
        })
    } catch(err) {
        console.error(err)
    }


}

module.exports = start;