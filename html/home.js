let e = require('./helper/env');
let trans = require('./trans');
let openGraph = require('./opengraph');
let helper = require('./helper');
let { layout } = require('./base');
let tags = require('./tags');

module.exports = (data) => layout('Track Daily Work', [
  tags.div({ cls: ['home'] }, [
    tags.p('Track Daily Work'),
    tags.div({ id: 'app' })
  ])
], {

  moreJs: tags.frag([
    helper.trackTag(),
    helper.embedJsUnsafeLoadThen(`
TDWTrack.boot(${helper.safeJsonValue({
data
})})`)
  ]),
  openGraph: openGraph({
    title: "Track Daily Work",
    description: trans.siteDescription,
    url: e.env.domain,
    image: helper.assetUrl("images/Chessishard.png")
  })
});
