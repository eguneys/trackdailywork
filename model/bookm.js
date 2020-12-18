let { chapters, sections, exercises } = require('./fixtures');

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
    exercises.filter(_ =>
      _.id === exerciseId)[0]
  );
  
};

module.exports = () => {
  return new BookM();
};
