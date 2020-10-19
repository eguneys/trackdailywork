import * as dom from './dom';

export default function modal(content, cls, onClose) {

  const $content = dom.parse(content);

  const $wrap = dom.div({ id: 'modal-wrap' }, [
    dom.span({ cls: 'close' })
  ]);

  const $overlay = dom.div({ id:'modal-overlay', cls: `${cls}` }, 
                           [], dom.fListen('click', modal.close));

  $overlay.appendChild($wrap);
  while ($content.childNodes[0]) {
    $wrap.appendChild($content.childNodes[0]);
  }

  modal.onClose = onClose;
  dom.fListen('click', modal.close)
  (dom.findKlass($wrap, 'close')[0]);

  dom.fListen('click', (_, e) => e.stopPropagation())($wrap);

  dom.prepend(dom.findTag(document, 'body')[0], $overlay);

  return $wrap;  
}

modal.close = () => {
  let $overlay = dom.findId(document, 'modal-overlay');

  if (modal.onClose) {
    modal.onClose();
  }

  $overlay.remove();

  delete modal.onClose;
};
