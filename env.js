module.exports = function(app) {

  this.setServer = (server) => {
    let { address, port } = server.address();

    this.domain = address;
    this.port = port;

    this.isProd = app.get('env') === 'production';
    this.minifiedAssets = this.isProd;
  };  
  
};
