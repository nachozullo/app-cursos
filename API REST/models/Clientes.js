const mongoose = require("mongoose");

const Cliente =  new mongoose.Schema({
    nombre: {type: String, trim: true},
    apellido: {type: String, trim: true},
    dni: Number,
    direccion: {type: String, trim: true},
    nota: {type: Number, default: 0}
})

module.exports = mongoose.model("Cliente", Cliente);