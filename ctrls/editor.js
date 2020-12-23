let { bookm } = require('../model');
let html = require('../html');

function Editor(env) {

  this.index = async function(req, res, next) {
    res.send(html.editor());
  };

}

module.exports = env => new Editor(env);
