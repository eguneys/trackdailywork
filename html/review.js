let { layout } = require('./base');
let tags = require('./tags');
let helper = require('./helper');

module.exports = (review) =>  {

  let data = review.content;

  return layout('Review', [
    tags.section([
      tags.a({ href: '#' }, [
        tags.h1([review.title])
      ]),
      helper.ainfo(review),
      tags.div({ id: 'chessmd' }),
      tags.a({ href: helper.ligame(review.gameid) }, [
        tags.img(helper.ligif(review.gameid))
      ])
    ])
  ], {
    chessmd: true,
    buttons: tags.frag([
      tags.div([
        tags.a({ href:'/editor', id: 'editor', cls: 'link' }, [
          'Edit Content'
        ])
      ]),
      tags.div([
        tags.a({ id: 'title', cls: 'link' }, [
          'Edit Title'
        ])
      ]),
      tags.div([
        tags.a({ href:'/publish', id: 'publish', cls: 'link' }, [
          'Publish!'
        ])
      ])
    ]),
    moreJs: tags.frag([
      helper.reviewTag,
      helper.embedJsUnsafeLoadThen(`
ChessIsReview.boot(${helper.safeJsonValue({
data
})})`)
    ]),
    moreCss: tags.frag([
      helper.cssTag('article'),
      helper.cssTag('review'),
    ])
  });
  
};
