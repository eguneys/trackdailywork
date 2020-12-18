let liapi = require('../liapi');
let { bookm } = require('../model');
let html = require('../html');

let cis = require('./cis');


function Practice(env) {

  this.challenge = async (req, res, next) => {

    let ctx = await cis.reqToCtx(req);

    let { exerciseId } = req.params;

    let exercise = await bookm.exerciseById(exerciseId);

    if (ctx.user) {

      let game = await liapi.aiFen(ctx.user.token, exercise.fen);

      liapi.listenFen(ctx.user.token, exercise);

      res.redirect(`https://lichess.org/${game.id}`);

    } else {
      let efenslug = exercise.fen.replace(' ', '_');
      res.redirect(`https://lichess.org/editor/${efenslug}`);
    }
  };


  this.index = async (req, res, next) => {

    let ctx = await cis.reqToCtx(req);

    let chapters = await bookm.chapters();

    let sections = await Promise.all(
      chapters.map(chapter => 
        bookm.sectionsByChapter(chapter.id)
      )
    ).then(_ => _.flat());

    let exercises = await Promise.all(
      sections.map(section =>
        bookm.exercisesBySection(section.id))
    ).then(_ => _.flat());

    res.send(html.practice(chapters, sections, exercises)(ctx));
  };  

};

module.exports = env => new Practice(env);
