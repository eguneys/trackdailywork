let Project = require('./project');
let { envm } = require('./model');

module.exports = function(app) {

  this.setServer = (server) => {};  

  this.isProd = app.get('env') === 'production';
  this.minifiedAssets = this.isProd;

  this.domain = this.isProd ? 'https://trackdailywork.com'
    : 'http://localhost:3000';

  this.assetBaseUrl = this.isProd ? this.domain : '';

  this.awaitVariables = async function() {

    let { name } = await envm.envByKey("project-name");


    if (Project.name !== name) {
      console.error('Wrong Project.');
      process.exit(1);
    } else {
      console.log(`Connected to [${name}] Firestore`);
    }

    let { secret } = await envm.envByKey("cookie-secret");

    this.cookieSecret = secret;
  };

};
