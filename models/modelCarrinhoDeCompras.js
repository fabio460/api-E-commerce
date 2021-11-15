const mongoose = require('mongoose');
const schema = mongoose.Schema({
    nome:String,
    imagem1:String,
    valor:String,
    tamanho:String,
    quantidade:String,
    
    
    //sexo:String,
    //idade:String,
    //tipo:String,
   // tecido:String
})
const model = mongoose.model('carrinhoDeCompras',schema);
module.exports = model;