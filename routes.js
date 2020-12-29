let express = require('express');
let multer = require('multer');
let upload = multer();

module.exports = function makeRouter(env) {

  let router = express.Router();

  let { home,
        work
      } = require('./ctrls')(env);

  router.get('/', home.index);

  router.get('/work', work.list);
  router.post('/work/add', work.add);
  router.get('/work/next', work.next);
  router.get('/work/:workId/remove', work.remove);
  router.get('/work/:workId/do', work.do);

  return router;
};
