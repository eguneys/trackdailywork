module.exports = function(app) {

  this.setServer = (server) => {};  

  this.isProd = app.get('env') === 'production';
  this.minifiedAssets = this.isProd;

  this.domain = this.isProd ? 'https://chessishard.com'
    : 'http://localhost:3000';

  this.assetBaseUrl = this.isProd ? this.domain : '';


  this.oauthClient = {
    id: `P9EVo7U8DUvWEBxe`,
    secret: `OfiNtgzTpm521SwjD6iRstPA5jDpGY1P`
  };
};
