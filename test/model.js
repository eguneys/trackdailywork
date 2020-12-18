let { Moderate } = require('../model/fixtures');
let { terminate,
      bookm } = require('../model');

const beValidLike = (f) => {
  return v => {
    v.fold(f, _ => {
      console.error(`[Fail ${_}]`);
    });
  };
};

const beInvalidLike = f => {
  return v => {
    v.fold(_ => 
      console.error(`[Fail ${_}]`), f);
  };
};

const logErr = err => console.error(err);

module.exports = async () => {

  await books();

  terminate().then(_ => {
    process.exit();
  });
};

function books() {

  // bookm.chapters().then(beValidLike(_ => {
  //   console.log(_);
  // })).catch(logErr);

  // bookm.sectionsByChapter('6').then(beValidLike(_ => {
  //   console.log(_);
  // })).catch(logErr);

  bookm.exercisesBySection('6-1').then(beValidLike(_ => {
    console.log(_);
  })).catch(logErr);

};
