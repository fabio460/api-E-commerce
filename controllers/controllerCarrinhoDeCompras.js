const conexao = require('../conexao');
conexao(); 
const modelCarrinho = require('../models/modelCarrinhoDeCompras');
exports.listar =async (req,res)=>{
    const produto =await modelCarrinho.find();
    res.json(produto);
 }
exports.inserir = (req,res)=>{
    const sim = modelCarrinho.create({
            nome:req.body.nome,
            imagem1:req.body.imagem1,
            quantidade:req.body.quantidade,
            tamanho:req.body.tamanho,
            valor:req.body.valor,
           // sexo:req.body.sexo,
           // idade:req.body.idade,
           // tipo:req.body.tipo,
           // tecido:req.body.tecido
    })
    if(sim){
        res.send("campos inseridos com sucesso")
    }else{res.send('falha na inserção de produtos')}
}

exports.deletar = (req,res)=>{
    modelCarrinho.findByIdAndDelete(req.params.id,(err)=>{
        if(err){
            res.send("falha ao deletar")
        }
        else{
            res.send("deletado com sucesso")
        }
    })
}