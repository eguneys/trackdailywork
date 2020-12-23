let { articlem } = require('../model');
let html = require('../html');

function Home(env) {

  this.index = (req, res, next) => {
    res.send(html.home());
  };

};

module.exports = env => {
  return new Home(env);
};
