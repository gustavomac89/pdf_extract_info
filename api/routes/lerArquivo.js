module.exports = app => {
    const controller = require('../controllers/lerArquivo')();
    const multer = require('multer');
  
    app.route('/api/v1/ler-arquivo')
      .use(multer().single)
      .post(controller.lerArquivo);
  }