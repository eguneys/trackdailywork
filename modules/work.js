let { toValid } = require('../valid');
let { userm, workm, statusm } = require('../model');

let res = {};

res.validate = function(body) {

  return toValid(!!body, `Empty body`)
    .flatMap(_ =>
      toValid(typeof body.name == 'string', `Name must be a string`)
        .flatMap(_ =>
          toValid(body.name.length > 5 && body.name.length < 100, `Name length must be between 5 and 100`)
        )
    );

};

res.jsonView = async function(userId) {

  let { days } = await userm.byId(userId);
  
  let works = await workm.allByUserId(userId);

  let status = await statusm.allByUserIdForDay(userId, days);

  return {
    works,
    status
  };

};


module.exports = res;
