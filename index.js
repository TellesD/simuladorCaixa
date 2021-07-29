const express = require('express');
const app = express();

const parserRoute = require('./caixa');


app.use('/caixa', parserRoute);

app.listen(3000, () => {
  console.log("Sacar sem limite de cedulas: http://localhost:3000/caixa/saque/<valor_para_ser_sacado>");
  console.log("Sacar com limite de cedulas, maximo: 2 de 100, 3 de 50, 4 de 20, 12 de 10  : http://localhost:3000/caixa/saqueLimitado/<valor_para_ser_sacado>");
 
  
})
  

module.exports = app;