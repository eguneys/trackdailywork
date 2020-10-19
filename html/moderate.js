let { layout } = require('./base');
let tags = require('./tags');
let helper = require('./helper');

let { bits: articleBits } = require('./article');

module.exports.home = (articles) => layout('Free Chess Articles', [
  tags.div({ cls: ['moderate'] }, [
    tags.div([
      articles.length > 0 ? 
        tags.ul(articles.map(article)):
        tags.p(`No articles to moderate : (`)
    ])
  ])
], {});

module.exports.article = (article) => {

  let data = article;

  return layout(article.title, [
    articleBits.body(article)
  ], {
    chessmd: true,
    buttons: tags.frag([
      tags.div([
        tags.a({ href: `/moderate/${article.id}/deny`, id: 'deny', cls: 'link' }, [
          '❌ Deny'
        ])
      ]),
      tags.div([
        tags.a({ href: `/moderate/${article.id}/accept`, id: 'accept', cls: 'link' }, [
          '✓ Accept'
        ])
      ])
    ]),
    moreJs: tags.frag([
      helper.moderateTag,
      helper.embedJsUnsafeLoadThen(`
ChessIsModerate.boot(${helper.safeJsonValue({
data
})})`)
    ]),
    moreCss: helper.cssTag('article')
  });
};

function article(article) {
  return tags.li([tags.a({ href: '/moderate/' + article.id }, [article.title]), 
                  tags.date([article.date])]);
}
