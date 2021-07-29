const express = require('express');
const router = express.Router();

cedulas = {
  "cem": 0,
  "cinquenta": 0,
  "vinte": 0,
  "dez": 0
}

//HTTP requisitions
router.get('/saque/:valor', (req, res) => {
  let valor = req.params.valor;


  if (valor % 10 > 0) {
    return res.send("Não é possivel sacar este valor");
  }

  valor = valor / 10;
  cedulas.cem = (valor / 10) | 0;
  valor = valor % 10;
  cedulas.cinquenta = (valor / 5) | 0;
  valor = valor % 5;
  cedulas.vinte = (valor / 2) | 0;
  cedulas.dez = valor % 2;


  return res.send(cedulas);
})

router.get('/saqueLimitado/:valor', (req, res) => {
  let valor = req.params.valor;


  if (valor % 10 > 0) {
    return res.send("Não é possivel sacar este valor");
  }
  if (valor > 550) {
    return res.send("Notas insuficientes no caixa");
  }

  valor = valor / 10;
  cedulas.cem = (valor / 10) | 0;
  valor = valor % 10;
  
  if (cedulas.cem > 2) {
    extra = cedulas.cem - 2;
    cedulas.cem = 2;
    valor = valor + extra * 10
  }
  console.log(valor)


  cedulas.cinquenta = (valor / 5) | 0;

  valor = valor % 5;

  if (cedulas.cinquenta > 3) {
    extra = cedulas.cinquenta - 3;
    cedulas.cinquenta = 3;
    valor = valor + extra * 5
  }
  console.log(valor)

  cedulas.vinte = (valor / 2) | 0;
  valor = valor % 2;
  cedulas.dez = valor;
  
  if (cedulas.vinte > 4) {
    extra = cedulas.vinte - 4;
    cedulas.vinte = 4;
    valor = valor + extra * 2
    cedulas.dez = valor;
  }



  return res.send(cedulas);
})





module.exports = router;