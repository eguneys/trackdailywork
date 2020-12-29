let express = require('express');
let multer = require('multer');
let upload = multer();

module.exports = function makeRouter(env) {

  let router = express.Router();

  let { home,
      } = require('./ctrls')(env);

  router.get('/', home.index);

  return router;
};
