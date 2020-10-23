let { valid, invalid, fToValid } = require('../valid');

module.exports = (coll) => {
  return new SessionM(coll);
};

function SessionM(coll) {

  this.insert = (session) =>
  coll.insert(session)
    .then(valid)
    .catch(err => {
      // monitor duplication
      return invalid(err);
    });

  this.get = (name) =>
  coll.one(name)
    .then(fToValid(`No session ${name}`))
    .catch(invalid);

  this.update = (name, f) =>
  coll.update(name, f)
    .then(valid)
    .catch(invalid);

  this.drop = () =>
  coll.drop();
};
