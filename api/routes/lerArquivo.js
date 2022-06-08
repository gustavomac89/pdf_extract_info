module.exports = app => {
    const controller = require('../controllers/lerArquivo')();
    const multer = require('multer');
    const config = require ('../../config/multer');

    app.use(multer(config).single('file'));
    app.route('/api/v1/ler-arquivo')
      .post(controller.lerArquivo);
  }