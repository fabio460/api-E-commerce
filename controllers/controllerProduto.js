
const conexao = require('../conexao');
conexao(); 
const modelProduto = require('../models/modelProduto');
 

exports.listar =async (req,res)=>{
   const produto =await modelProduto.find();
   res.json(produto);
}

exports.inserir = (req,res)=>{
    const sim = modelProduto.create({
            nome:req.body.nome,
            imagem1:req.body.imagem1,
            imagem2:req.body.imagem2,
            valor:req.body.valor,
            sexo:req.body.sexo,
            idade:req.body.idade,
            tipo:req.body.tipo
    })
    if(sim){
        res.send("campos inseridos com sucesso")
    }else{res.send('falha na inserção de produtos')}
}

exports.deletar = (req,res)=>{
    modelProduto.findByIdAndDelete(req.params.id,(err)=>{
        if(err){
            res.send("falha ao deletar")
        }
        else{
            res.send("deletado com sucesso")
        }
    })
}

