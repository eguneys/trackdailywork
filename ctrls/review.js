let html = require('../html');

module.exports.get = function(req, res) {

  let review = {
    title: 'Add a title',
    date: 'September 2020',
    gameid: 'tBBd0Uws',
    time: '30+0',
    rated: true,
    white: 'heroku',
    black: 'learningabc',
    content: `

# Classical Old Benoni

<1. d4 c5 2. e3 d5 3. Nf3 Nf6> Engine suggestion is 2. d5

# Avoid Isolated Pawn

<4. c4 cxd4> Engine says it's ok

# Preserve Initiative

I exchange queens and develop

=8

Full game reference: 
`
  };  

  res.send(html.review(review));

};

module.exports.post = function(req, res) {

  res.json({
    url: '/review',
    cookie: {
      name: 'rk2',
      maxAge: 604800,
      value: 'anonuser'
    }
  });
};
