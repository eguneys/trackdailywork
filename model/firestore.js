const {Firestore, FieldValue} = require('@google-cloud/firestore');

const firestore = new Firestore();

module.exports = (name) => {
  return new Coll(name);
};

module.exports.terminate = () => {
  return firestore.terminate();
};

module.exports.increment = (by) =>
FieldValue.increment(by);

function Coll(name) {
  
  let coll = firestore.collection(name);

  const $doc = doc => ({
    id: doc.id,
    ...doc.data()
  });

  this.insert = (data) =>
  coll.doc(data.id).set(data)
    .then(_ => 
      this.one(data.id));

  this.one = id =>
  coll.doc(id).get().then(_ => _.exists && $doc(_));

  this.delete = id =>
  coll.doc(id).delete();

  this.fdoc = (id, f) =>
  f(coll.doc(id));

  this.query = fQuery =>
  fQuery(coll).get().then(qSnapshot => {
    let res = [];
    qSnapshot.forEach(dSnapshot =>
      res.push($doc(dSnapshot))
    );
    return res;
  });

  this.queryOne = fQuery =>
  this.query(fQuery).then(_ => _[0]);

  this.update = (id, update) =>
  coll.doc(id).update(update);

  this.map = fRef =>
  coll.listDocuments()
    .then(refs =>
      Promise.all(refs.map(ref =>
        fRef(ref)
      ))
    );

  this.drop = () =>
  coll.listDocuments()
    .then(refs =>
      Promise.all(refs.map(ref =>
        ref.delete()
      ))
    );
  
}
