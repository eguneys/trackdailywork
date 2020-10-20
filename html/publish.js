let { layout } = require('./base');
let tags = require('./tags');
let helper = require('./helper');


module.exports = (article) => {

  return layout(`${article.title}`, [
    tags.section([
      tags.p(`Your article is published.`),
      tags.div({ cls: 'publish-link' },[
        tags.input({ type: 'text', value:helper.articleUrl(article) }),
        tags.a({ target: "_blank", href: `/${article.id}` }, [
          tags.span(`🔗`)
        ]),
      ]),
      tags.p({ cls: 'small' }, `It should be on the home page after review.`),
      tags.p({ cls: 'small' }, [tags.span({cls: 'warning'}, `Warning:`), 
                                ` The links are likely to change in beta.`]),
      tags.div({ cls: 'publish-share' }, [
        tags.p('Share: '),
        helper.twitterEmbed(`#chess`, helper.articleUrl(article))
      ])])], {
        moreJs: tags.frag([
          helper.publishTag(),
          helper.embedJsUnsafeLoadThen(`
ChessIsPublish.boot(${helper.safeJsonValue({
})})`),
          helper.embedJsUnsafe(`
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));
`)]),
        moreCss: helper.cssTag('publish')
      });
};
