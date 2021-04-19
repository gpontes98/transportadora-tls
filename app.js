const express = require('express');
const app = express();
const bodyParser = require('body-parser');

import sendMail from './scripts/sendMail'; 

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/sendmail", async function(req,res){
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const mensagem = req.body.mensagem;

    sendMail(nome, email, telefone, mensagem);
    res.send('Formulário recebido');
})

app.listen(3001);