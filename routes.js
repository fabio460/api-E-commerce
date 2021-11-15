const route = require('express').Router();
const multer = require('multer');
const Produto = require('./controllers/controllerProduto');
const multerConfig = require('./multerConfig')
const usuario = require('./controllers/usuarioController');
const carrinho  = require('./controllers/controllerCarrinhoDeCompras');
//home
route.get('/',(req,res)=>{res.sendFile(__dirname + '/index.html')})

//produtos
route.get('/listar',Produto.listar);
route.get('/listarPorNome/:nome',Produto.listarPorNome)
route.post('/postar',multer(multerConfig).single(),Produto.inserir)
route.delete("/deletar/:id",multer(multerConfig).single(),Produto.deletar);
route.put('/alterar/:id',multer(multerConfig).single(),Produto.alterar);

//carrinho
route.get('/listarCarrinho',carrinho.listar);
route.post('/postarCarrinho',multer(multerConfig).single(),carrinho.inserir)
route.delete('/deletarCarrinho/:id',multer(multerConfig).single(),carrinho.deletar)
route.put('/atualisacarrinho/:id',multer(multerConfig).single(),carrinho.atualizar)
//usuarios
route.get('/listarusuarios',usuario.listarUsuario)
route.post('/cadastrarUsuario',multer(multerConfig).single(),usuario.cadastrarUsuario)
route.post('/tokenUsuario',multer(multerConfig).single(),usuario.token)
route.delete('/deletarUsuario/:id',multer(multerConfig).single(),usuario.deletarUsuario)
route.put('/alterarusuario/:id',multer(multerConfig).single(),usuario.atualizar)
module.exports = route;