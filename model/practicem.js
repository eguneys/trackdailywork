let { valid, invalid, fToValid } = require('../valid');
let { exercises } = require('./fixtures');

function PracticeM() {

  this.bySection = (sectionId) =>
  Promise.resolve(
    valid(
      exercises
        .filter(_ => _.sectionId === sectionId)
    )
  );
  
};

module.exports = () => {
  new PracticeM();
};
