let tags = require('../tags');

function ainfo({ rated, updatedAt, speed, white, black }) {

  updatedAt = new Date(updatedAt);
  let sDate = updatedAt
      .toLocaleString('default', { month: 'long' }) + ' ' + updatedAt.getUTCFullYear();

  return tags.div({ cls: ['info'] }, [
    tags.date([sDate]),
    ` • `,
    tags.span(speed),
    ` • `,
    tags.span(rated?'Rated':'Casual'),
    ` • `,
    tags.a({ href: liuser(white) }, [white]),
    ' vs ',
    tags.a({ href: liuser(black) }, [black]),
  ]);
}

function liuser(user) {
  return 'https://lichess.org/@/' + user;
}

function ligame(game) {
  return `https://lichess.org/${game}`;
}

function ligif(game) {
  return `https://lichess1.org/game/export/gif/${game}.gif`;
}

module.exports = {
  ainfo,
  liuser,
  ligame,
  ligif
};
