import boot from './boot';
import CisEditor from 'ciseditor';
import { defaultContent } from './fixtures';

export function app(opts) {

  let data = opts.data;

  let content = data.draft;

  if (!content || content.length < 100) {
    content = defaultContent;
  }

  CisEditor(opts.$_, {
    input(_) {
      content = _;
    },
    content
  });

  return {
    content: () => content
  };
}

export { boot };
