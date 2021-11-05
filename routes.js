const route = require('express').Router();
const multer = require('multer');
const Produto = require('./controllers/controllerProduto');
const multerConfig = require('./multerConfig')
route.get('/',(req,res)=>{
    res.send('<h1>Em desenvolvimento</h1><div><a href="https://api-e-commerce.vercel.app/listar">lista de produtos</a></div>')
});
route.get('/listar',Produto.listar);
route.post('/postar',multer(multerConfig).single(),Produto.inserir)
route.delete("/deletar/:id",Produto.deletar);
module.exports = route;