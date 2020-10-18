let { draftm } = require('../model');
let { draftId } = require('../model/fixtures');
let { review: sanitizeReview } = require('../sanitize');
let { lichess: populateLichess } = require('../populate');
let html = require('../html');

module.exports.get = function(req, res) {
  function frender(review) {
    res.send(html.review(review));
  }

  draftm.bySessionId(req.session.id).then(v_ =>
    v_.fold(frender, _ =>
      res.redirect('/editor')
    )
  );

};

module.exports.post = function(req, res, next) {

  function fUpdateAndRender(draft) {
    sanitizeReview(req.body).fold(ureview =>
      populateLichess(ureview).then(() => {
        ureview.updatedAt = Date.now();
        return draftm.updateById(draft.id, ureview).then(v_ =>
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

  draftm.bySessionId(req.session.id).then(v_ =>
    v_.fold(fUpdateAndRender, () => {
      draftm.insert({
        id: draftId(),
        sessionId: req.session.id
      }).then(v_ =>
        v_.fold(fUpdateAndRender, next)
      );
    })
  );
};
