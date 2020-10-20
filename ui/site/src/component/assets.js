import * as dom from 'common/dom';

export const assetUrl = (path) => {
  const baseUrl = '';

  return baseUrl + '/assets' + '/' + path;
};

const loadedCss = new Map();
export const loadCss = url => {
  if (!loadedCss.has(url)) {
    loadedCss.set(url, true);

    const el = document.createElement('link');
    el.rel = 'stylesheet';
    el.href = assetUrl(url);
    document.head.append(el);
  }
};

export const loadCssPath = (key) =>
loadCss(`css/${key}.${dom.bodyData('dev')?'dev':'min'}.css`);
