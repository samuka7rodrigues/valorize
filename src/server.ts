import express, { request, response } from "express";

const app = express();


//criar o servidor que iremos utilizar //
//@yarn add @types/express

//http://localhost:porta
app.listen(3000, () => console.log("Server is running NLW"));

/*
//Criar nossa primeira Rota
//Conhecendo os tipos de métodos
// GET - BUSCA UMA INFORMACAO
//POST - INSERIR UMA INFORMACAO (CRIACAO)
//PUT  - ALTERAR UMA INFORMACAO
//DELETE - APAGAR UMA INFORMACAO
//PATCH - ALTERAR UMA INFORMACAO ESPECÍFICA (EX-ALTERAR O AVATAR OU SENHA)
*/

//Criando uma rota get
//recurso(rota)

app.get("/teste", (request, response) => {
    //Request -- tudo que esta entrando
    //Response -- tudo que estao saindo
    return response.send("Criando a primeira rota com get");
});

app.post("/teste_post", (request, response) => {
    //Metodo post
    return response.send("Criando a primeira rota com metodo post")
});


