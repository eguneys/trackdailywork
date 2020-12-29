let { nextString } = require('./random');

module.exports = (coll) => {
  return new StatusM(coll);
};

function StatusM(coll) {

  let newStatus = (workId, userId, day) => ({
    id: nextString(8),
    userId,
    workId,
    day
  });

  this.insert = (workId, userId, day) =>
  coll.insert(newStatus(workId, userId, day));

  this.byId = (id) =>
  coll.one(id);

  this.byWorkIdForDay = (workId, day) =>
  coll.queryOne(_ =>
    _.where('workId', '==', workId)
      .where('day', '==', day));

  this.allByUserIdForDay = (userId, day) =>
  coll.query(_ => 
    _.where('userId', '==', userId)
      .where('day', '==', day));

  this.update = (id, f) =>
  coll.update(id, f);

  this.delete = id =>
  coll.delete(id);

  this.drop = () =>
  coll.drop();
};
