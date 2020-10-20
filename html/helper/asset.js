let e = require('./env');
let tags = require('../tags');

let assetBaseUrl = '';

function assetUrl(path) {
  return `${assetBaseUrl}/assets/${path}`;
}

function cssAt(path) {
  return tags.link(assetUrl(path));
}

function jsAt(path) {
  return tags.script(true, assetUrl(path));
}

function jsModule(name) {
  return jsAt(`compiled/${name}${e.env.minifiedAssets ? '.min':''}.js`);
}

let helper = {
  assetUrl
};

helper.cssTag = name => 
cssAt(`css/${name}.${e.env.minifiedAssets?'min':'dev'}.css`);

helper.jsModule = jsModule;
helper.moderateTag = () => jsModule('moderate');
helper.publishTag = () => jsModule('publish');
helper.reviewTag = () => jsModule('review');
helper.editorTag = () => jsModule('editor');
helper.articleTag = () => jsModule('article');
helper.chessmdTag = () => jsAt('javascripts/vendor/bundle.js');

helper.embedJsUnsafe = (js) => {
  return `<script>${js}</script>`;
};

helper.embedJsUnsafeLoadThen = (js) => {
  return helper.embedJsUnsafe(`cishard.load.then(()=>{${js}})`);
};

helper.safeJsonValue = _ => JSON.stringify(_);

module.exports = helper;
