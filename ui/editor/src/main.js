import boot from './boot';
import CisEditor from 'ciseditor';

export function app(opts) {

  let data = opts.data;

  CisEditor(opts.$_, {content: data.draft});

  return {
    content: `ui/editor/main/content`
  };
}

export { boot };
