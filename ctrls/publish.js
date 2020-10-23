let { articlem, draftm } = require('../model');
let html = require('../html');
let { draftToArticle, emptyDraft } = require('../publish');

module.exports = function(req, res, next) {
  function fPublish(draft, article) {
    articlem.insert(article)
      .then(v_ => v_.fold(_ =>
        res.send(html.publish(_)),
        next)
      ).then(() => {
        draftm.update(draft.id, emptyDraft(draft));
      });
  }

  draftm.getBySessionId(req.session.id).then(v_ =>
    v_.fold(draft =>     
      draftToArticle(draft).fold(
        _ => fPublish(draft, _), 
        _ => res.redirect('/review')
      ), _ => res.redirect('/review'))
  );
};
