let store = require('./firestore');

const isProd = process.env.NODE_ENV === 'production';
const mName = name => isProd ? name : `${name}-dev`;

const user = mName('user');
const status = mName('status');
const work = mName('work');
const session = mName('session');
const envName = mName('env');

const mInit = (m, coll) => m(store(coll));

module.exports = {
  userm: mInit(require('./userm'), user),
  statusm: mInit(require('./statusm'), status),
  workm: mInit(require('./workm'), work),
  sessionm: mInit(require('./sessionm'), session),
  envm: mInit(require('./envm'), envName),
  terminate: store.terminate
};
