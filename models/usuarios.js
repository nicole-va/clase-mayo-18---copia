'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuariosSchema = Schema({  
    mail: { type: String, require:true, unique: true},
    pass: { type: String, require:true}
});
//nombre de la coleccion 
module.exports = mongoose.model('usuarios', UsuariosSchema);