import * as dom from 'common/dom';

export default function(opts) {

  let $link = document.getElementsByClassName('publish-link')[0].firstChild;
  dom.fListen('click', (_, e) => {
    e.preventDefault();

    $link.select();
    $link.setSelectionRange(0, 99999);
    document.execCommand("copy");
  })($link);
  
  
}
