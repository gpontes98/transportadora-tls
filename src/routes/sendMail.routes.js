const express = require('express');
const router = express.Router();
const sendMail = require('./../controllers/sendMail.controller')

router.use(express.json()); //express.json para aceitar json e fazer o req.body

router.post("/sendmail", (req, res) =>{
    const { nome, email, telefone, mensagem} = req.body;
    sendMail.send(nome, email, telefone, mensagem)
    .then(response =>{
        if(response === false){
            res.status(400).send();
        }else{
            res.status(200).send();
        }
    })
    .catch(err=>{
        res.status(500).send();
    })
})

module.exports = router;