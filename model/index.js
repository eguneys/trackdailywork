let store = require('./firestore');

const isProd = process.env.NODE_ENV === 'production';
const session = 'Session' + (isProd ? '' : 'dev');
const draft = 'Draft' + (isProd ? '': 'dev');
const article = 'Article' + (isProd ? '' : 'dev');

module.exports = {
  sessionm: require('./sessionm')(store(session)),
  draftm: require('./draftm')(store(draft)),
  articlem: require('./articlem')(store(article)),
  terminate: store.terminate
};
