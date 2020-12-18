module.exports = (coll) => {
  return new LiUser(coll);
};

function LiUser(coll) {

  let newUser = ({
    username,
    token
  }) => ({
    id: username,
    username,
    token
  });
  
  this.insert = (user) =>
  coll.insert(newUser(user));

  this.byId = (id) =>
  coll.one(id);

  this.drop = () =>
  coll.drop();
}
