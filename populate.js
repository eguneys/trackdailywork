var axios = require('axios');
var { valid, invalid } = require('./valid');

function game(gameId) {
  return axios({
    url: `https://lichess.org/game/export/${gameId}`,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    return valid(response.data);
  }).catch(error=> {
    if (error.response) {
      return invalid(error.response.status);
    } else {
      return invalid(error.request);
    }
  });
}

function matchLichessLinkOrId(ligameid) {
  const linkRegex = /lichess\.org\/(.{8})/,
        longIdRegex = /(.{8})/;

  let match;
  if ((match = ligameid.match(linkRegex))) {
    return valid(match[1]);
  } else if ((match = ligameid.match(longIdRegex))) {
    return valid(match[1]);
  } else {
    return invalid(`No match.`);
  }
}

module.exports.lichess = (review) => {

  return Promise.resolve(review.ligameid).then(ligameid => {
    if (!ligameid) {
      review.ligameid = null;
      review.gameid = null;
      return null;
    }
    return matchLichessLinkOrId(ligameid).fold(gameid =>
      game(gameid).then(vGame => {
        vGame.fold(game => {
          review.gameid = game.id;
          review.rated = game.rated;
          review.speed = game.speed;
          review.white = game.players.white.user.name;
          review.black = game.players.black.user.name;
        }, () => {
          review.gameid = null;
          review.ligameid = null;
        });
      }), () => {
        review.gameid = null;
        review.ligameid = null;
        return Promise.reject();
      });
  });
};
