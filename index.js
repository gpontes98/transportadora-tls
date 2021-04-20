const express = require('express');
const indexRouter = require('./src/routes/index.routes');
const sendMailRouter = require('./src/routes/sendMail.routes');
const port = process.env.PORT || 3000;

const app = express(); //Iniciando o express

//Usando rotas
app.use(indexRouter);
app.use(sendMailRouter);

app.listen(port, () => console.log(`server running on ${port}`));
