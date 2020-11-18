let e = require('./helper/env');
let trans = require('./trans');
let openGraph = require('./opengraph');
let helper = require('./helper');
let { layout } = require('./base');
let tags = require('./tags');

module.exports = (articles) => layout('Free Chess Articles', [
  tags.div({ cls: ['home'] }, [
    tags.div({ cls: ['start'] }, [
      tags.a({ href: '/editor', cls: ['button'] }, ['New article']),
    ]),
    tags.div([
      tags.ul(articles.map(article))
    ])
  ])
], {
  openGraph: openGraph({
    title: "Free chess articles",
    description: trans.siteDescription,
    url: e.env.domain,
    image: helper.assetUrl("images/Chessishard.png")
  })
});

function article(article) {
  return tags.li([tags.a({ href: '/' + article.id }, [article.title]), 
                  tags.date([helper.date(article.updatedAt)])]);
}
