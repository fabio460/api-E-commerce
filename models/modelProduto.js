const mongoose = require('mongoose');

const schema = mongoose.Schema({
    nome:String,
    imagem1:String,
    imagem2:String,
    valor:String,
    sexo:String,
    idade:String,
    tipo:String,
    tecido:String
});

const modelProduto = mongoose.model('produto',schema);
module.exports = modelProduto;