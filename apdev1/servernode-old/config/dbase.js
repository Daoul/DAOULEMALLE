const mongoose = require('mongoose')

const DB_URI = 'mongodb://localhost:27017/AppWeb'

module.exports = () =>{
    const connect = () =>{
        mongoose.connect(DB_URI,
            {
                keepAlive: true, 
                useNewUrlParse: true, 
                useUnitfielToplogy: true

            }
            ).then(()=> {console.log('Connexión Correcta')})
            .catch((err)=>{
                console.log('DB: ERROR !!')})
    }
    connect()
}