let { increment } = require('./firestore');

module.exports = (coll) => {
  return new UserM(coll);
};

function UserM(coll) {

  let newUser = (username) => ({
    id: username,
    username,
    days: 1
  });

  this.insert = (user) =>
  coll.insert(newUser(user));

  this.nextDay = () => coll.map(_ =>
    _.set({days: increment(1) }, { merge: true })
  );

  this.byId = (id) =>
  coll.one(id);

  this.drop = () =>
  coll.drop();
};
