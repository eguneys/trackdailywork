let { nextString } = require('./random');

module.exports = (coll) => {
  return new Progress(coll);
};

function Progress(coll) {

  let newProgress = ({
    userId,
    exerciseId
  }) => ({
    id: nextString(8),
    userId,
    exerciseId
  });
  
  this.insert = (userId, exerciseId) =>
  coll.insert(newProgress({ userId, exerciseId }));

  this.byUser = (userId) =>
  coll.query(_ => 
    _.where('userId', '==', userId));

  this.drop = () =>
  coll.drop();
}
