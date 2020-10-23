let { toValid } = require('./valid');
let { sessionm } = require('./model');
let { sessionId } = require('./model/fixtures');

module.exports = function(req, res, next) {

  function makeNewSession(_) {
    let session = {
      id: sessionId()
    };

    sessionm.insert(session)
      .then(v_ => {
        v_.fold(_ => {
          res.cookie(_cookie.name, session.id, { maxAge: _cookie.maxAge });
          req.session = session;
          next();
        }, invalid => {
          next(invalid);
        });
      });
  }

  let vcookie = toValid(req.cookies[_cookie.name], 'No session cookie');
  vcookie.fold(cookie => {
    sessionm.get(cookie).then(vsession => {
      vsession.fold(session => {
        req.session = session;
        next();
      }, makeNewSession);
    });
  }, makeNewSession);
};


const _cookie = {
  name: 'rk2',
  maxAge: 604800
};

module.exports.cookie = _cookie;
