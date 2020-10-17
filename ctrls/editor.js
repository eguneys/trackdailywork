let html = require('../html');

module.exports = function(req, res) {
  let draft = `
# This is a header
This is a paragraph. Add chess notation like <1. e3 e6 2. Nf3 Nf6 3. d3> 
Continue paragraph. Continue from black's move <3... d6 4. a3 a6> 

To start a new paragraph add two new lines.

To embed a chess board use ply number like:
=8

Happy blogging
`;

  res.send(html.editor(draft));
};
