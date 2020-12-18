let { valid, invalid, fToValid } = require('../valid');

module.exports = (coll) => {
  return new OAuthM(coll);
};

function OAuthM(coll) {
  
  this.insert = (session) =>
  coll.insert(session)
    .then(valid)
    .catch(err => {
      return invalid(err);
    });


  this.get = (id) =>
  coll.one(id)
    .then(fToValid(`No token ${id}`))
    .catch(invalid);

  this.drop = () =>
  coll.drop();

}
