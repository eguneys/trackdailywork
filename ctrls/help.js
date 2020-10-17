let html = require('../html');

module.exports = (req, res) => {
  res.send(html.help());
};
