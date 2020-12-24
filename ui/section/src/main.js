import boot from './boot';
import ChessMd from 'chessm';

export function app(opts) {

  ChessMd(opts.$_, { md: opts.data });

  console.log(`[ChessMd@${ChessMd.version}]`);

}

export { boot };
