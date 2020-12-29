let { nextString } = require('../model/random');
let { userm, sessionm, workm } = require('../model');
let html = require('../html');

let workApi = require('../modules/work');

let { reqToCtx } = require('./cis');

function Home(env) {

  const saveAuthentication = (username) =>
        sessionm.insert(username)
        .then(_ => _.id);

  const saveUser = username =>
        userm.insert(username);

  this.index = async (req, res, next) => {

    let ctx = await reqToCtx(req);

    if (!ctx.user) {
      let username = nextString(8);

      await saveUser(username);

      req.session.sessionId = await saveAuthentication(username);

      res.redirect('/');
      return;
    }

    let data = await workApi.jsonView(ctx.user.id);

    res.send(html.home(data));
  };

};

module.exports = env => {
  return new Home(env);
};
