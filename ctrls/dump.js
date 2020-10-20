let { articlem } = require('../model');
let html = require('../html');

module.exports = function(req, res, next) {
  articlem.accepted().then(v_ => 
    v_.fold(articles =>
      res.json(articles.map(_ => ({
        title: _.title,
        ligameid: _.ligameid,
        content: _.content
      }))),
      next)
  );
};
