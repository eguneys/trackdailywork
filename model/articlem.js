let { toValid, valid, invalid } = require('../valid');
let { Moderate, Accepted, Denied } = require('./fixtures');

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

function accept(id) {
  return updateStatus(id, Accepted);
}

function deny(id) {
  return updateStatus(id, Denied);
}

function updateStatus(id, status) {
  return Promise.resolve().then(() => {
    return toValid(articles
                   .find(_ => _.id === id),
                   `No article ${id}`)
      .map(_ => {
        _['status'] = status;
        return _;
      });
  });
}

function moderate() {
  return list(Moderate);
}

function accepted() {
  return list(Accepted);
}


function list(status) {
  return Promise.resolve().then(() => {
    return valid(articles.filter(_ => _.status === status));
  });
}

module.exports = {
  moderate,
  accepted,
  accept,
  deny,
  insert,
  byId,
};
