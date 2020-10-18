let { toValid, valid, invalid } = require('../valid');

let drafts = [];

function insert(draft) {
  return Promise.resolve().then(() => {
    if (!draft.id) {
      return invalid("Draft requires an id");
    }

    return byId(draft.id).then(v_ => v_.flatMap(_ => {
      return invalid(`Draft already exists ${draft.id}`);
    }, () => {
      drafts.push(draft);
      return valid(draft);
    }));
  });
}

function byId(id) {
  return Promise.resolve().then(() => {
    return toValid(drafts.find(_ => _.id === id),
                   `No draft ${id}`);
  });
}

function bySessionId(sessionId) {
  return Promise.resolve().then(() => {
    return toValid(drafts.find(_ => _.sessionId === sessionId),
                   `No draft ${sessionId}`);
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
  bySessionId,
  updateById
};
