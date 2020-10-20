module.exports = function(app) {

  this.setServer = (server) => {};  

  this.domain = 'https://chessishard.com';

  this.isProd = app.get('env') === 'production';
  this.minifiedAssets = this.isProd;
};
