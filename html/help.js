let tags = require('./tags');

module.exports = () => {
  return tags.frag([
    tags.p('# This is a header'),
    tags.p(`This is a paragraph. Add chess notation like &lt;1. e3 e6 2. Nf3 Nf6 3. d3&gt;
Continue from black's move &lt;3... d6 4. a3 a6&gt; `),
    tags.p(`To start a new paragraph add two new lines.`),
    tags.p(`To embed a chess board use ply number like:`),
    tags.p(`=8`),
    tags.br(),
    tags.p(`Embed variation lines &lt;main2 main 3. d4 d5 4. a3 a6&gt; . "main2" is variation name and "main" is the parent line.`),
    tags.p(`Make sure to put a space at beginning and end of lines &lt;main3 main 3. d4&gt; .`),
    tags.p(`To publish your article click Review first, then publish.`),
    tags.p(`Happy blogging 📘`)
  ]);
};
