
module.exports = () => {
    const controller = {};
  
    controller.lerArquivo = (req, res) => res.status(201).json({"resp":"teste"});  
    return controller;
  }