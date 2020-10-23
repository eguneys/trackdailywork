let { valid, invalid } = require('../valid');

module.exports = coll => {
  return new DraftM(coll);
};

function DraftM(coll) {

  this.insert = (draft) =>
  coll.insert(draft)
    .then(valid)
    .catch(err => {
      // monitor duplication
      return invalid(err);
    });

  this.get = (name) =>
  coll.one(name)
    .then(valid)
    .catch(invalid);

  this.getBySessionId = sessionId =>
  coll.queryOne(_ =>
    _.where('sessionId', '==', sessionId))
    .then(valid)
    .catch(invalid);

  this.update = (name, f) =>
  coll.update(name, f)
    .then(valid)
    .catch(invalid);

  this.drop = () =>
  coll.drop();
}
