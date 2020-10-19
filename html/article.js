let { layout } = require('./base');
let tags = require('./tags');
let helper = require('./helper');

let {
  ligame,
  ligif,
  ainfo
} = helper;

let bits = {
  body(article) {
    return tags.section([
      tags.a({ href: '#' }, [
        tags.h1([article.title])
      ]),
      article.gameid ? helper.ainfo(article) : '',
      tags.div({ id: 'chessmd' }),
      article.gameid ? 
        tags.a({ href: helper.ligame(article.gameid) }, [
          tags.img(helper.ligif(article.gameid))
        ]) : ''
    ]);
  }
};

module.exports = (article) => {

  let data = article.content;

  return layout(article.title, [
    bits.body(article)
  ], {
    chessmd: true,
    moreJs: tags.frag([
      helper.articleTag(),
      helper.embedJsUnsafeLoadThen(`
ChessIsArticle.boot(${helper.safeJsonValue({
data
})})`)
    ]),
    moreCss: helper.cssTag('article')
  });
};

module.exports.bits = bits;
module.exports.notFound = layout(`Oops...`, [
  tags.h1('Article Not Found'),
  tags.p('The article not found'),
  tags.a({ href:"/" }, 'Return home')
], {
});
