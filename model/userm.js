let { increment } = require('./firestore');

module.exports = (coll) => {
  return new UserM(coll);
};

function UserM(coll) {

  let newUser = (username) => ({
    id: username,
    username,
    days: 1,
    lastDaysUpdated: Date.now()
  });

  this.insert = (user) =>
  coll.insert(newUser(user));

  this.nextDayForUserId = (userId) => 
  coll.fdoc(userId, _ =>
            _.set({
              lastDaysUpdated: Date.now(),
              days: increment(1)
            }, { merge: true })
           );
  
  this.byId = (id) =>
  coll.one(id);

  this.drop = () =>
  coll.drop();
};
