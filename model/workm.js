let { nextString } = require('./random');

module.exports = (coll) => {
  return new WorkM(coll);
};

function WorkM(coll) {

  let newWork = (name, userId) => ({
    id: nextString(8),
    userId,
    name
  });

  this.insert = (name, userId) =>
  coll.insert(newWork(name, userId));

  this.byId = (id) =>
  coll.one(id);

  this.allByUserId = (userId) =>
  coll.query(_ => 
    _.where('userId', '==', userId));

  this.update = (id, f) =>
  coll.update(id, f);

  this.delete = id =>
  coll.delete(id);

  this.drop = () =>
  coll.drop();
};
