
require('dotenv').config()
module.exports= conectar = ()=>{
    const mongoose = require('mongoose');
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    const db = mongoose.connection;
    db.on('erro',(err)=>console.error(err));
    db.once('open',()=>console.log('conectado com o banco mongoDb'));
}