import boot from './boot';
import ChessMd from 'chessmd';

export function app(opts) {

  let { data } = opts;

  ChessMd(opts.$_, { content: data.content });

}

export { boot };
