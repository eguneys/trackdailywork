let { userm, sessionm } = require('../model');

let res = {};

res.reqToCtx = async (req) => {

  let { sessionId } = req.session;

  if (!sessionId) {
    return {};
  }

  let session = await sessionm.byId(sessionId);

  if (!session) {
    return {};
  }

  let user = await userm.byId(session.userid);

  return {
    user
  };
  
};


module.exports = res;
