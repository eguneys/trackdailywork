let e = require('./helper/env');
let trans = require('./trans');
let openGraph = require('./opengraph');
let helper = require('./helper');
let { layout } = require('./base');
let tags = require('./tags');

module.exports = () => layout('Track Daily Work', [
  tags.div({ cls: ['home'] }, [
    tags.p('Track Daily Work'),
  ])
], {
  openGraph: openGraph({
    title: "Track Daily Work",
    description: trans.siteDescription,
    url: e.env.domain,
    image: helper.assetUrl("images/Chessishard.png")
  })
});

function article(article) {
  return tags.li([tags.a({ href: '/' + article.id }, [article.title]), 
                  tags.date([helper.date(article.updatedAt)])]);
}
