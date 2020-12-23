let express = require('express');
let multer = require('multer');
let upload = multer();

module.exports = function makeRouter(env) {

  let router = express.Router();

  let { home,
        auth,
        practice
      } = require('./ctrls')(env);

  router.get('/', home.index);
  router.get('/auth', auth.lichess);
  router.get('/callback', auth.callback);

  router.get('/practice', practice.index);
  router.get('/section/:sectionId', practice.section);

  router.get('/challenge/:exerciseId', practice.challenge);

  return router;
};
