let { articlem } = require('../model');
let html = require('../html');

function Home(env) {

  this.index = (req, res, next) => {
    articlem.accepted().then(v_ => 
      v_.fold(articles =>
        res.send(html.home(articles)),
        next)
    );
  };

};

module.exports = env => {
  return new Home(env);
};
