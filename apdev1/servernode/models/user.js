const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
    cod: {
        type: Number,
        unique: true,
        required: true
    },
    nombre: {type: String},
    apellidos: {type: String},
    edad: {type: Number},
    mail: {
        type: String,
        unique: true,
        required: true
    },
    telefono: {type: String},
    foto: {type: String},
    tipo: {type: String}
    }
)
module.exports = mongoose.model('user', UserSchema)
