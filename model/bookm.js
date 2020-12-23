let { chapters, sections, exercises } = require('./fixtures');

let { explanations } = require('./chapterfixtures');

function BookM() {

  this.chapters = () =>
  Promise.resolve(
    chapters
  );

  this.sectionsByChapter = (chapterId) =>
  Promise.resolve(
    sections
          .filter(_ => 
            _.chapterId === chapterId)
  );

  this.exercisesBySection = (sectionId) =>
  Promise.resolve(
    exercises
      .filter(_ => 
        _.sectionId === sectionId)
  );

  this.exerciseById = exerciseId =>
  Promise.resolve(
    exercises.find(_ =>
      _.id === exerciseId)
  );

  this.sectionById = sectionId =>
  Promise.resolve(
    sections.find(_ =>
      _.id === sectionId)
  );


  this.explanationBySectionId = sectionId =>
  Promise.resolve(
    explanations.find(_ =>
      _.sectionId === sectionId)
  );
  
};

module.exports = () => {
  return new BookM();
};
