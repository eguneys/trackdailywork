const {Datastore} = require('@google-cloud/datastore');

const datastore = new Datastore();

module.exports = (kind) => {
  return new Coll(kind);
};

function Coll(kind) {

  this.insert = (data) =>
  datastore.save({
    key: datastore.key(kind),
    data
  });

  this.one = (name) => 
  datastore.get(
    datastore.key([kind, name]))
    .then(([_]) => _);

  this.runQuery = async (fQuery) => {
    const query = fQuery(
      datastore.createQuery(kind)
    );
    const [items] = await datastore.runQuery(query);
    return items;
  };

  this.update = async (name, f) => {
    const transaction = datastore.transaction();
    const key = datastore.key([kind, name]);
    try {
      await transaction.run();
      const [item] = await transaction.get(key);
      f(item);
      transaction.save({
        key,
        data: item
      });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  };
}
