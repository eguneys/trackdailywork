import * as xhr from 'common/xhr';
import * as dom from 'common/dom';
import modal from 'common/modal';

export default function(opts) {
  const $_ = document.getElementById("chessmd"),
        { data } = opts,
        { title } = data;
  
  let review;

  opts.$_ = $_;
  review = window['ChessIsReview'].app(opts);

  let $title = document.getElementById('title');

  $title.addEventListener('click', e => {
    e.preventDefault();

    cishard.loadCssPath('help');

    fetch($title.href, {}).then(res => {
      res.text().then(text => {
        let $wrap = modal(text, 'edit-title', () => {
        });

        let $form = dom.findTag($wrap, 'form')[0];

        dom.fListen('submit', (_, e) => {
          e.preventDefault();

          xhr.formToXhr(_).then(result => {
            if (result.err) {
              let $error = document.getElementById('form-error');
              $error.textContent = result.err;
            } else {
              cishard.reload();
            }
          });

        })($form);
      });
    });
  });

  if (!title) {
    $title.click();
  }
}
