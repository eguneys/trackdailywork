let { draftm } = require('../model');
let { draftId } = require('../model/fixtures');
let html = require('../html');

module.exports = function(req, res, next) {
  function frender(draft) {
    res.send(html.editor(draft.content));
  }

  draftm.getBySessionId(req.session.id).then(v_ => {
    v_.fold(frender, _ => {
      let draft = {
        id: draftId(),
        sessionId: req.session.id,
        updatedAt: Date.now()
      };
      draftm.insert(draft).then(v_ =>
        v_.fold(_ => frender(draft), next)
      );
    });
  });

};
