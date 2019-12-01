const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const usuarioSchema=new Schema({
 nombre: String,
apellido: String,
email: String,
cedula: String,
contrasena: String,
genero: String,
direccion: String,
tipoCuenta: String,
})
module.exports=mongoose.model('usuarios',usuarioSchema); 