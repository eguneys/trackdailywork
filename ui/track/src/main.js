import boot from './boot';
import Play from './play';
import * as fixtures from './fixtures';

export function app(opts) {

  let element = opts.$_;

  let play = new Play();

  play.init(opts.data);

  element.appendChild(play.wrap());  
  
}


export { boot };
