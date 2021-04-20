const nodemailer = require('nodemailer');

exports.send = (nome, email, telefone, mensagem) => {
    return new Promise((resolve,reject)=>{
        let transporter = nodemailer.createTransport({
            service: 'gmail', 
            auth: { 
                user: 'transporteelogisticasilva@gmail.com', 
                pass: 'tlsilva21' 
                } 
        });

        var mailOptions = {          
                from: 'tls.transportes@outlook.com',
                to: 'tls.transportes@outlook.com',
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

