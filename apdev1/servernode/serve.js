const express = require('express')

const initDB = require('./config/dbase')

const app = express()

const port = 3001

const userRouters = require('./routers/user')

// app.get('/', (req, res)=>{
//     res.send({
//         data: 'Hola Mundo'
//     })
// })

app.use(userRouters)

