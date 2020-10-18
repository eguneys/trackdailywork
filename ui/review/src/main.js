import boot from './boot';
import ChessMd from 'chessmd';

export function app(opts) {

  let data = opts.data;

  let { content, title } = data;

  ChessMd(opts.$_, {content});

}

export { boot };
