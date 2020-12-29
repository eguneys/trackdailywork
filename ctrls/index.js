module.exports = env =>
({
  home: require('./home')(env),
  work: require('./work')(env)
});
