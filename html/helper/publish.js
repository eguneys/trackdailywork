let e = require('./env');
let tags = require('../tags');

function articleUrl(article) {
  return `${e.env.domain}/${article.id}`;
}

function twitterEmbed(text, url) {
  return tags.a({cls: 'twitter-share-button',
                 href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
                 'data-size': 'large'}, 'Tweet');
}


module.exports = {
  articleUrl,
  twitterEmbed
};
