let { layout } = require('./base');
let tags = require('./tags');
let helper = require('./helper');

module.exports = () => layout('Opening Repertoire', [
  tags.div({ cls: 'box__top' }, [
    tags.form({ cls: 'search', action: '/openings/search', method: 'get' }, [
      tags.input({ name: 'q', placeholder: 'All openings' }),
    ]),
    tags.form({ cls: 'new-opening', method: 'post', action: 'opening' }, [
      tags.button({ type: 'submit', cls: 'button' }, 'NEW')
    ])
  ]),
  tags.div({ cls: 'openings list' }, [
    
  ])
], {
  moreCss: tags.frag([
    helper.cssTag('opening')
  ])
});
