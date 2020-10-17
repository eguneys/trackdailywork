let { layout } = require('./base');
let tags = require('./tags');
let helper = require('./helper');

let {
  ligame,
  ligif,
  ainfo
} = helper;

module.exports = (article) => {

  let data = article.content;

  return layout(article.title, [
    tags.section([
      tags.a({ href: '#' }, [
        tags.h1([article.title])
      ]),
      ainfo(article),
      tags.div({ id: 'chessmd' }),
      tags.a({ href: ligame(article.gameid) }, [
        tags.img(ligif(article.gameid))
      ])
    ])
  ], {
    chessmd: true,
    moreJs: tags.frag([
      helper.articleTag,
      helper.embedJsUnsafeLoadThen(`
ChessIsArticle.boot(${helper.safeJsonValue({
data
})})`)
    ]),
    moreCss: helper.cssTag('article')
  });
};
