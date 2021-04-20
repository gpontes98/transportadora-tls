const express = require('express');
const indexRouter = require('./routes/index.routes');
const sendMailRouter = require('./routes/sendMail.routes');

const app = express(); //Iniciando o express

//Usando rotas
app.use(indexRouter);
app.use(sendMailRouter);

app.listen(3000);
