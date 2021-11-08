const route = require('express').Router();
const multer = require('multer');
const Produto = require('./controllers/controllerProduto');
const multerConfig = require('./multerConfig')

route.get('/listar',Produto.listar);
route.post('/postar',multer(multerConfig).single(),Produto.inserir)
route.delete("/deletar/:id",Produto.deletar);
route.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})
module.exports = route;