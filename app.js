const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.use(express.static('public'));
app.use(express.json());


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/sendmail", (req, res) =>{
    const { nome, email, telefone, mensagem} = req.body;
    sendMail(nome, email, telefone, mensagem)
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

app.listen(3001);


function sendMail(nome, email, telefone, mensagem){
    return new Promise((resolve,reject)=>{
        let transporter = nodemailer.createTransport({
            service: 'gmail', 
            auth: { 
                user: 'transporteelogisticasilva@gmail.com', 
                pass: 'tlsilva21' 
                } 
        });

       var mailOptions = {          
                from: 'gabrielpontes98@gmail.com',
                to: 'gabrielpontes98@gmail.com',
                subject: 'Contato TLS',
                html: `
                <p>Nome: ${nome}</p>
                <p>Email: ${email}</p>
                <p>Telefone: ${telefone}</p>
                <p>Mensagem: ${mensagem}</p>`
       };

       transporter.sendMail(mailOptions, function(error, info){
           if (error) {
               console.log("error is "+error);
              resolve(false);
           } 
          else {
              console.log('Email sent: ' + info.response);
              resolve(true);
           }
        });
    });  
}