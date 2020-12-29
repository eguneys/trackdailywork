let e = require('./helper/env');
let tags = require('./tags');
let helper = require('./helper');
let trans = require('./trans');

let doctype = tags.raw('<!DOCTYPE html>');
let htmlTag = tags.html();
let topComment = tags.raw('<!-- TrackDailyWork is open source! See https://github.com/eguneys/trackdailywork -->');
let viewport = tags.raw('<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">');


let base = {};

base.layout = function layout(title, body, {
  chessmd,
  moreCss,
  moreJs,
  openGraph,
  buttons = []
}) {
  // let fonts = tags.link('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap');

  let favicons = [512, 128, 64, 32]
      .map(px => tags.raw(`
<link rel="icon" type="image/png" href="${helper.assetUrl(`images/cis${px}x${px}.png`)}" sizes="${px}x${px}"/>
`)
          ).join('');

  return tags.frag([
    doctype,
    htmlTag({ lang: 'en' }, [
      topComment,
      tags.head([
        viewport,
        tags.headTitle(`${title} • trackdailywork.com`),
        helper.cssTag('fonts'),
        helper.cssTag('site'),
        //fonts,
        moreCss,
        chessmd ? helper.cssTag('main') : '',
        tags.meta({ content: openGraph?openGraph.description:trans.siteDescription,
                    name: 'description' }),
        favicons,
        openGraph?openGraph.frags:''
      ]),
      tags.body({
        cls: [],
        'data-dev': e.env.minifiedAssets?"false": "true",
      },[
        siteHeader(buttons),
        tags.div({
          id: "main-wrap",
          cls: [
          ]
        }, body),
        loadScripts(moreJs, chessmd)
      ])
    ])
  ]);
};

function siteHeader(buttons) {
  return tags.header({ id: 'top' }, [
    tags.div({ cls: 'site-title-nav' }, [
      tags.h1({ cls: 'site-title' }, [
        tags.a({ href: "/" }, ['📘 Track Daily Work']
              )
      ]),
      // tags.nav({ id: 'topnav' }, [
      //   tags.section([
      //     tags.a({ href: '/opening' }, 'Opening')
      //   ])
      // ])
    ]),
    tags.div({ cls: 'site-buttons' }, [
      ...buttons
    ])
  ]);
}

function cishardJsObject() {
  return helper.embedJsUnsafe(`cishard={load:new Promise(r=>{window.onload=r})}`);
}

function loadScripts(moreJs, chessmd) {
  return tags.frag([
    chessmd ? helper.chessmdTag() : '',
    cishardJsObject(),
    helper.jsModule("site"),
    moreJs
  ]);
}

module.exports = base;
