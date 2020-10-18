let { toValid, valid, invalid } = require('../valid');

let articles = [];

function insert(article) {
  return Promise.resolve().then(() => {
    if (!article.id) {
      return invalid("Article requires an id");
    }

    return byId(article.id).then(v_ => v_.flatMap(_ => {
      return invalid(`Article already exists ${article.id}`);
    }, () => {
      articles.push(article);
      return valid(article);
    }));
  });
}

function byId(id) {
  return Promise.resolve().then(() => {
    return toValid(articles.find(_ => _.id === id),
                   `No article ${id}`);
  });
}

function list() {
  return Promise.resolve().then(() => {
    return valid(articles);
  });
}

module.exports = {
  list,
  insert,
  byId,
};
