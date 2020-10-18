let { nextString } = require('./random');

let fixtures = {};

fixtures.draftId = () => nextString(8);
fixtures.sessionId = () => nextString(8);

module.exports = fixtures;
