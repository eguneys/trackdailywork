module.exports.liId = function(id) {
  return id.match(/\w{8}(\w{4})?/);
};

module.exports.liLink = function(link) {
  return link.match(/https:\/\/lichess.org\/\w{8}(\w{4})?/);
};
