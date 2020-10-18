let { toValid, valid, invalid } = require('../valid');

let sessions = [];

function insert(session) {
  return Promise.resolve().then(() => {
    if (!session.id) {
      return invalid("Session requires an id");
    }

    return byId(session.id).then(v_ => v_.flatMap(_ => {
      return invalid(`Session already exists ${session.id}`);
    }, () => {
      sessions.push(session);
      return valid(session);
    }));
  });
}

function byId(id) {
  return Promise.resolve().then(() => {
    return toValid(
      sessions.find(_ => _.id === id),
      `No session ${id}`);
  });
}

function updateById(id, update) {
  return byId(id).then(v_ => v_.map(_ => {
    for (let key in update) {
      _[key] = update[key];
    }

    return _;
  }));

}

module.exports = {
  insert,
  byId,
  updateById
};
