const usuarioModel = require('../models/modelUsuario');
const jwt = require('jsonwebtoken')
exports.token =async (req,res)=>{
    const {usuario,senha} = req.body;
   const user =await usuarioModel.findOne({
       usuario,
       senha
    })
    if(!user){
       res.send('usuario não encontrado');
    }else{
        return res.json({
            usuario:user.nome,
            token:jwt.sign({usuario:req.body.usuario},'my-secret-key',{expiresIn:500})
        })
    }
}

exports.cadastrarUsuario = (req,res)=>{
   const user = usuarioModel.create({
        nome:req.body.nome,
        usuario:req.body.usuario,
        senha:req.body.senha
    })

    if(user){
        res.json('cadastrado cmo sucesso')
    }
    else{
        res.send('erro ')
    }
}
exports.listarUsuario =async (req,res)=>{
    const usuario =await usuarioModel.find();
    res.json(usuario);
}
exports.deletarUsuario = (req,res)=>{
    
    
    usuarioModel.findByIdAndDelete(req.params.id,(err)=>{
        if(err){
            res.send("falha ao deletar")
        }else{
            res.send('deletado com sucesso')
        }
    })
}
exports.atualizar = (req,res)=>{
    usuarioModel.findByIdAndUpdate(req.params.id,{
        nome:req.body.nome,
        usuario:req.body.usuario,
        senha:req.body.senha
    },(err)=>{res.send("alterado com sucesso")})
}