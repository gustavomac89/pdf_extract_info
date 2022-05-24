module.exports = app => {
    const controller = require('../controllers/lerArquivo')();
  
    app.route('/api/v1/ler-arquivo')
      .post(controller.lerArquivo);
  }