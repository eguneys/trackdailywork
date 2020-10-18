let { draftm } = require('../model');
let { draftId } = require('../model/fixtures');
let html = require('../html');

module.exports = function(req, res, next) {
  function frender(draft) {
    res.send(html.editor(draft.content));
  }

  draftm.bySessionId(req.session.id).then(v_ => {
    v_.fold(frender, _ => {
      draftm.insert({
        id: draftId(),
        sessionId: req.session.id
      }).then(v_ =>
        v_.fold(frender, next)
      );
    });
  });

};
