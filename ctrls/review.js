let { draftm } = require('../model');
let { draftId } = require('../model/fixtures');
let { review: sanitizeReview } = require('../sanitize');
let { lichess: populateLichess } = require('../populate');
let html = require('../html');

module.exports.get = function(req, res) {
  function frender(review) {
    res.send(html.review(review));
  }

  draftm.getBySessionId(req.session.id).then(v_ =>
    v_.fold(frender, _ =>
      res.redirect('/editor')
    )
  );

};

module.exports.post = function(req, res, next) {

  function fUpdateAndRender(draft) {
    sanitizeReview(req.body).fold(uReview =>
      populateLichess(uReview).then(() => {
        uReview.updatedAt = Date.now();
        return draftm.update(draft.id, uReview).then(v_ =>
          v_.fold(_ =>
            res.json({ 
              url: '/review'
            }),
            next)
        );
      }), err => {
      res.json({
        err
      });
    });
  }

  draftm.getBySessionId(req.session.id).then(v_ =>
    v_.fold(fUpdateAndRender, () => {
      let draft = {
        id: draftId(),
        sessionId: req.session.id,
        updatedAt: Date.now()
      };
      draftm.insert(draft).then(v_ =>
        v_.fold(_ => fUpdateAndRender(draft), next)
      );
    })
  );
};
