import * as xhr from 'common/xhr';
import * as dom from 'common/dom';

export default function(opts) {
  const $_ = document.getElementById("chessmd"),
        { data } = opts;
  let moderate;

  opts.$_ = $_;
  moderate = window['ChessIsModerate'].app(opts);

  let $accept = dom.findId(null, 'accept'),
      $deny = dom.findId(null, 'deny');

  dom.fListen('click', (_, e) => {
    e.preventDefault();

    xhr.json(_.href, {
      method: 'post'
    }).then(res => {
      cishard.redirect('/moderate');
    });

  })($accept);

  dom.fListen('click', (_, e) => {
    e.preventDefault();

    xhr.json(_.href, {
      method: 'post'
    }).then(res => {
      cishard.redirect('/moderate');
    });

  })($deny);
  
}
