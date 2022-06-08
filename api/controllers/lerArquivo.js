
module.exports = () => {
    const controller = {};
    const fs = require('fs');
    const pdf = require('pdf-parse');

    let dataBuffer = fs.readFileSync('./input1.txt',{encoding:'utf8', flag:'r'});
    let antes = "GFIP";
    let depois = "8.40"
    pdf(dataBuffer).then(function(data) {
      encontraString(antes, depois, data);
    });

    encontraString = (antes, depois, texto) => {
          if (data.text.includes(antes) && data.text.includes(depois)) {
              let pos = data.text.lastIndexOf(palavra) + palavra.length;
              let comp = data.text.substring(pos, pos  + 8) ;
              console.log(comp); 
        
};
    }
  
    controller.lerArquivo = (req, res) => res.status(201).json(
      {"resp":"teste"}
    
      );  

    return controller;
  }