Projeto Api em desenvolvimento

Stacks usadas: Node.js com MongoDb.

No momento existem duas listas, uma de produtos e outra de usuarios
O sistema permite listar, atualizar, deletar e postar os objetos.
Para o campo de imagem, é necessário copiar uma imagem como link pois o github não permite alterar uma pasta storage via json,
somente via commit.

Abaixo segue a lista dos links da api feitas até o momento mas que estão em desenvolvimento conforme a necessidade do frontend

    GET => https://api-e-commerce.vercel.app/listar
    POST => https://api-e-commerce.vercel.app/postar
    DELETE => https://api-e-commerce.vercel.app/deletar/{id}
        
    GET => https://api-e-commerce.vercel.app/listarusuarios
    POST => https://api-e-commerce.vercel.app/cadastrarUsuario
    PUT => https://api-e-commerce.vercel.app/alterarusuario/{id}
    DELETE = > https://api-e-commerce.vercel.app/deletarUsuario/{id}

Na lista de usuários temos 3 campos: nome,usuario(email) e senha
Na de produtos: nome, imagem1,imagem2,valor,sexo(masculino/feminino),tipo(camisa,calça ...)