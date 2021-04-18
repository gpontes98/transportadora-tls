const nodemailer = require("nodemailer");

export default async function sendMail(nome, email, telefone, mensagem){
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
      <p>Nome: ${nome}</p>
      <p>Email: ${email}</p>
      <p>Telefone: ${telefone}</p>
      <p>Mensagem: ${mensagem}</p>`// plain text body
  };

  await transporter.sendMail(mailOptions, (err, info) => {
      if(err)
        console.log(err);
      else
        console.log(info);
  });
}
