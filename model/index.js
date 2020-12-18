let store = require('./firestore');

const isProd = process.env.NODE_ENV === 'production';
const mName = name => isProd ? name : `${name}-dev`;

const session = mName('session');
const draft = mName('draft');
const article = mName('article');
const liuser = mName('liuser');
const book = mName('book');

const mInit = (m, coll) => m(store(coll));

module.exports = {
  sessionm: mInit(require('./sessionm'), session),
  draftm: mInit(require('./draftm'), draft),
  articlem: mInit(require('./articlem'), article),
  userm: mInit(require('./liuserm'), liuser),
  bookm: mInit(require('./bookm'), book),
  terminate: store.terminate
};
