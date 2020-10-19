let { layout } = require('./base');
let tags = require('./tags');
let helper = require('./helper');

let { bits: articleBits } = require('./article');

module.exports = (review) =>  {
  return layout('Review', [
    articleBits.body(review)
  ], {
    chessmd: true,
    buttons: tags.frag([
      tags.div([
        tags.a({ href:'/editor', id: 'editor', cls: 'link' }, [
          'Edit Content'
        ])
      ]),
      tags.div([
        tags.a({ href:'/title/hook', id: 'title', cls: 'link' }, [
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
      helper.reviewTag(),
      helper.embedJsUnsafeLoadThen(`
ChessIsReview.boot(${helper.safeJsonValue({
data: {
title: review.title,
content: review.content
}
})})`)
    ]),
    moreCss: tags.frag([
      helper.cssTag('article'),
      helper.cssTag('review'),
    ])
  });
  
};
