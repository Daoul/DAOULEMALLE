const mongoose = require('mongoose')

const CursoSchema = new mongoose.Schema(
    {
    codC: {
        type: Number,
        unique: true,
        required: true
    },
    nombreC: {type: String},
    infoC: {type: String},
    contenidoC: {type: String},
    tipoC: {type: String}
    }
)
module.exports = mongoose.model('curso', CursoSchema)