let { extend } = require('./util');
let date = require('./date');
let game = require('./game');
let publish = require('./publish');
let asset = require('./asset');
let environment = require('./env');

let helper = {
  environment
};

extend(helper, date);
extend(helper, game);
extend(helper, publish);
extend(helper, asset);

module.exports = helper;
