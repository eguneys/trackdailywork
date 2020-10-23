let html = require('../html');
let { articlem } = require('../model');

module.exports = function(req, res) {

  let { articleId } = req.params;

  articlem.get(articleId).then(v_ => v_.fold(article =>
    res.send(html.article(article)),
    _ => res.status(404).send(html.article.notFound)
  ));
};
