import { loadCssPath } from './component/assets';
import { redirect, reload } from './component/reload';

export default function() {
  const cs = window.cishard;

  cs.loadCssPath = loadCssPath;
  cs.redirect = redirect;
  cs.reload = reload;
}
