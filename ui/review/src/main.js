import boot from './boot';
import ChessMd from 'chessmd';

export function app(opts) {

  let data = opts.data;

  ChessMd(opts.$_, {content: data});

}

export { boot };
