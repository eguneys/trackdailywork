let { nextString } = require('./random');

let fixtures = {};

fixtures.draftId = () => nextString(8);
fixtures.sessionId = () => nextString(8);
fixtures.articleId = () => nextString(8);

fixtures.Moderate = 1;
fixtures.Accepted = 2;
fixtures.Denied = 3;

module.exports = fixtures;
