const mongoose = require('mongoose');
const schema = mongoose.Schema({
                    nome:String,
                    usuario:String,
                    senha:String
                })
const usuarioModel = mongoose.model('usuario',schema);
module.exports = usuarioModel;