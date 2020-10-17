let tags = require('../tags');

function ainfo({ rated, date, time, white, black }) {
  return tags.div({ cls: ['info'] }, [
    tags.date([date]),
    ` • ${time} • ${rated?'Rated':'Casual'} • `,
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
