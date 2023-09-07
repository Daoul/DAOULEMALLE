const express = require('express')
const app = express()
const port = 3001
app.listen(port,() =>{
    console.log('La aplicación está linea...')
})
const userRouters = require('./routes/user')
app.use(userRouters)
// conexiçon con Base datos
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/appWeb',{
    useNewUrlParser: true,
})
.then(() =>{
    console.log("Conexión establiecida...")
})
.catch(err => console.log(err))

