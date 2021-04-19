const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/sendmail", function(req,res){    
    let transporter = nodemailer.createTransport({ 
        service: 'gmail', 
        auth: { 
            user: 'transporteelogisticasilva@gmail.com', 
            pass: 'tlsilva21' 
            } 
    });
  
    const mailOptions = {
        from: 'gabrielpontes98@gmail.com', // sender address
        to: 'gabrielpontes98@gmail.com', // receiver (use array of string for a list)
        subject: 'Contato TLS', // Subject line
        html: `
        <p>Nome: ${req.body.nome}</p>
        <p>Email: ${req.body.email}</p>
        <p>Telefone: ${req.body.telefone}</p>
        <p>Mensagem: ${req.body.mensagem}</p>`// plain text body
    };
  
    transporter.sendMail(mailOptions, (err, info) => {
        if(err)
            res.sendFile(__dirname + "/public/erro.html");
        else
          res.sendFile(__dirname + "/public/sucesso.html");
    });
})

app.listen(3001);