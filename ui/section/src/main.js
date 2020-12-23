import boot from './boot';
import ChessMd from 'chessm';

export function app(opts) {

  ChessMd(opts.$_, { md: opts.data });

}

export { boot };
