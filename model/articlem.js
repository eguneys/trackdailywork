let { valid, invalid, fToValid } = require('../valid');
let { Moderate, Accepted, Denied } = require('./fixtures');

module.exports = coll => {
  return new ArticleM(coll);
};

function ArticleM(coll) {

  this.insert = (article) =>
  coll.insert(article)
    .then(valid)
    .catch(err => {
      // monitor duplication
      return invalid(err);
    });
  
  this.get = (name) =>
  coll.one(name)
    .then(fToValid(`No article ${name}`))
    .catch(invalid);

  this.accept = (name) =>
  updateStatus(name, Accepted);

  this.deny = (name) =>
  updateStatus(name, Denied);

  this.moderate = () =>
  list(Moderate);


  this.accepted = () =>
  list(Accepted);

  function updateStatus(name, status) {
    return coll.update(name, {status})
      .then(valid)
      .catch(invalid);
  }

  function list(status) {
    return coll.query(_ => 
      _.where('status', '==', status)
        .select('title', 'updatedAt'))
      .then(valid)
      .catch(invalid);
  }

  this.drop = () =>
  coll.drop();

}
