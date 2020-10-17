import * as xhr from 'common/xhr';
import * as dom from 'common/dom';
import modal from 'common/modal';

export default function(opts) {
  const $_ = document.getElementById("chessmd"),
        { data } = opts;
  let review;

  opts.$_ = $_;
  review = window['ChessIsReview'].app(opts);

  let $title = document.getElementById('title');

  $title.addEventListener('click', e => {
    e.preventDefault();

    cishard.loadCssPath('help');

    let $wrap = modal(`<form method="post"><div><input name="title" type='text' placeholder="Add a title"></input></div><div><input name="ligameid" type='text' placeholder="Lichess game link or id"></input></div><div class="form-actions single"><button class="button">Apply</button></div></form>`, 'edit-title', () => {
      
    });

    let $form = dom.findTag($wrap, 'form')[0];

    dom.fListen('submit', (_, e) => {
      e.preventDefault();

      xhr.formToXhr(_).then(() => {
        cishard.reload();
      });

    })($form);

    
  });

}
