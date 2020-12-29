let { envm } = require('../model');

async function env() {
  
  let cookie = await envm.envByKey('cookie-secret');

  console.log(cookie);
  
}

module.exports = env;
