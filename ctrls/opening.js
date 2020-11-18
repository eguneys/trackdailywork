let html = require('../html');

module.exports = function(req, res, next) {
  res.send(html.opening());
};

module.exports.post = function(req, res, next) {
  next('hello');
};
