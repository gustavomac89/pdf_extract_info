
module.exports = () => {
    const controller = {};
    const fs = require('fs');
    const pdf = require('pdf-parse');

    encontraString = (antes, depois, texto) => {
          if (texto.includes(antes) && texto.includes(depois)) {
              let posAntes = texto.lastIndexOf(antes) + antes.length;
              let posDepois = texto.lastIndexOf(depois);
              let encontrado = texto.substring(posAntes, posDepois);
              return encontrado;
          };
    }
  
    controller.lerArquivo = (req, res) => {
      //let antes = "REMUNERAÇÃO";
      let antes = req.body.antes;
      //let depois = "10-INSCRIÇÃO/TIPO";
      let depois = req.body.depois;
      console.log(antes);
      console.log(depois);
      let dataBuffer = fs.readFileSync('api/FGTS.PDF');
      pdf(dataBuffer).then(function(data) {
        let texto = data.text;
        let string = encontraString(antes,depois,texto);
        res.status(201).json({"string": string});  
      });
      }
    return controller;
  }