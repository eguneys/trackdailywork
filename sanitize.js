let { valid, invalid, fOptional, group } = require('./valid');
let { liId: validLiId, liLink: validLiLink } = require('./livalid');

function fcontent(content) {
  return valid(content)
    .check(_ => _.length < 100, `Minimum length: 100`)
    .check(_ => _.length > 10000, `Maximum length: 10000`);
};

function ftitle(title) {
  return valid(title)
    .check(_ => _.length < 20, `Minimum length: 20`)
    .check(_ => _.length > 200, `Maximum length: 200`);

}

function fligame(ligame) {
  return valid(ligame)
    .checkOr(validLiId,
             validLiLink, `Invalid Lichess game or id`);
}

module.exports = {
  fcontent,
  ftitle
};

module.exports.review = (review) => {

  return group([
    fOptional('content', fcontent),
    fOptional('title', ftitle),
    fOptional('ligameid', fligame)
  ], review).flatMap(_ => {
    if (Object.keys(_).length === 0) {
      return invalid(`Empty body`);
    }
    return valid(_);
  });
};
