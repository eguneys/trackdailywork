function Environment() {

  this.setEnv = (_env) => {
    this.env = _env;
  };
}

module.exports = new Environment();
