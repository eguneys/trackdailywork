let html = require('../html');
let { articlem } = require('../model');

module.exports.home = function(req, res, next) {
  articlem.moderate().then(v_ => 
    v_.fold(articles =>
      res.send(html.moderate.home(articles)),
      next)
  );
};

module.exports.one = function(req, res, next) {
  let { articleId } = req.params;
  
  articlem.byId(articleId).then(v_ => v_.fold(article =>
    res.send(html.moderate.article(article)),
    _ => res.status(404).send(html.article.notFound)
  ));
};

module.exports.accept = function(req, res, next) {
  let { articleId } = req.params;
  
  articlem.accept(articleId).then(v_ => v_.fold(_ =>
    res.status(200).send({ok: true})
    , next));
};

module.exports.deny = function(req, res, next) {
  let { articleId } = req.params;
  
  articlem.deny(articleId).then(v_ => v_.fold(_ =>
    res.status(200).send({ok: true})
    , next));
};
