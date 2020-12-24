let { envm } = require('./model');

module.exports = function(app) {

  this.setServer = (server) => {};  

  this.isProd = app.get('env') === 'production';
  this.minifiedAssets = this.isProd;

  this.domain = this.isProd ? 'https://chessishard.com'
    : 'http://localhost:3000';

  this.assetBaseUrl = this.isProd ? this.domain : '';

  this.awaitVariables = async function() {
    let { client_id, client_secret } = await envm.envByKey("lichessapi");

    this.oauthClient = {
      id: client_id,
      secret: client_secret
    };

    let { secret } = await envm.envByKey("cookie-secret");

    this.cookieSecret = secret;
  };

};
