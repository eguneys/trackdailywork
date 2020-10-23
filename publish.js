let { articleId, Moderate } = require('./model/fixtures');
let { fcontent, ftitle } = require('./sanitize');

module.exports.draftToArticle = draft =>
ftitle(draft.title).flatMap(_ =>
  fcontent(draft.content).map(_ => ({
    ...draft,
    sessionId: null,
    id: articleId(),
    status: Moderate
  }))
);

module.exports.emptyDraft = draft => ({
  content: null,
  title: null,
  ligameid: null,
  gameid: null
});
