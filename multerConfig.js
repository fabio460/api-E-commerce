const multer = require('multer');
const crypto = require('crypto');
const path = require('path');

const config = {
    storage:multer.diskStorage({
        destination: (req,file,cb)=>{
            cb(null,path.resolve(__dirname,"arquivos"))
        },
        filename: (req,file,cb)=>{
            crypto.randomBytes(8,(err,hash)=>{
                if(err)cb(err);
                const fileName = `${hash.toString('hex')}-${file.originalname}`;
                cb(null,fileName);
            })
        }
    })
} 

module.exports = config;