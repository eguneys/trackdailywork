import { loadCssPath } from './component/assets';
import { redirect, reload } from './component/reload';

export default function() {
  const tdw = window.tdw;

  tdw.loadCssPath = loadCssPath;
  tdw.redirect = redirect;
  tdw.reload = reload;
}
