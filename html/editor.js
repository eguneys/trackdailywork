let { layout } = require('./base');
let tags = require('./tags');
let helper = require('./helper');

module.exports = (draft) => {

  let data = {draft};

  return layout('Edit New Article', [
    tags.div({ id: 'chessed' }),
  ], {
    chessmd: true,
    buttons: tags.frag([
      tags.div([
        tags.a({ id: 'review', cls: 'link' }, [
          'Review'
        ])
      ]),
      tags.div([
        tags.a({ href:'/help/hook', id: 'help', cls: 'link' }, [
          'Help?'
        ])
      ])
    ]),
    moreJs: tags.frag([
      helper.editorTag,
      helper.embedJsUnsafeLoadThen(`
ChessIsEditor.boot(${helper.safeJsonValue({
data
})})`)
    ]),
    moreCss: tags.frag([
      helper.cssTag('editor'),
      helper.cssTag('editor_main')
    ])
  });
};
