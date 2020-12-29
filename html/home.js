let e = require('./helper/env');
let trans = require('./trans');
let openGraph = require('./opengraph');
let helper = require('./helper');
let { layout } = require('./base');
let tags = require('./tags');

module.exports = (data) => layout('Track Daily Work', [
  tags.div({ cls: ['home'] }, [
    tags.p(`Hi'ya Buddy`),
    tags.p(`Add some of your daily work.`),
    tags.p(`Check your work when you are done.`),
    tags.p(`Click on the next day when you want to start a new daily routine.`),
    tags.p(`Your daily work progress will be saved.`),
    tags.p(`Later you can view your progress over a month. (to be implemented)`),
    tags.small(`(Your session is anonymous, and tracked by a cookie.)`),
    tags.div({ id: 'app' })
  ])
], {

  moreCss: helper.cssTag('track'),
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
