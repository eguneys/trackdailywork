let { draftm } = require('../model');
let html = require('../html');

module.exports = (req, res) => {

  function frender(review) {
    res.send(html.title(review.title, review.ligameid));
  }

  draftm.getBySessionId(req.session.id).then(v_ =>
    v_.fold(frender, _ =>
      res.redirect('/editor')
    )
  );
};
