let tags = require('./tags');

module.exports = (title, liid) => {
  return tags.frag([
    tags.form({ method: '\"post\"' }, [
      tags.div({ id: 'form-error', cls: 'form-errors' }, []),
      tags.div([
        tags.input({ name:"title", value:`"${title?title:''}"`, required: '', minlength: '"20"', maxlength: '"200"', type:"text", placeholder:"\"Add a title\""}),
      ]),
      tags.div([
        tags.input({ name:"ligameid", value:`"${liid?liid:''}"`, type:"text", placeholder:"\"Lichess game link or id\""})
      ]),
      tags.div({ cls: 'form-actions single' }, [
        tags.button({ cls: 'button' }, 'Apply')
      ])
    ])
  ]);
};
