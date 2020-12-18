let e = require('./helper/env');
let trans = require('./trans');
let openGraph = require('./opengraph');
let helper = require('./helper');
let { layout } = require('./base');
let tags = require('./tags');

let bits = {};

bits.chapter = (sections, exercises) => {
  return (chapter) => {
    let csections = sections.filter(_ => _.chapterId === chapter.id);

    return tags.li([
      tags.h2(`${chapter.chapter}. ${chapter.name}`),
      tags.ul(
        csections.map(bits.section(exercises))
      )
    ]);
  };
};

bits.section = exercises => {
  return (section) => {
    let cexercises = exercises.filter(_ => _.sectionId === section.id);

    return tags.li([
      tags.h3(`${section.name}`),
      tags.ul(
        cexercises.map(bits.exercise)
      )
    ]);    
  };
};

bits.exercise = (exercise) => {
  return tags.li([
    tags.a({ target: '_blank', href: `/challenge/${exercise.id}` }, [exercise.fen])
  ]);
};

bits.info = (ctx) => {

  if (!ctx.user) {
    return tags.div([
      tags.p(`Select a position to open the analysis board on Lichess.`),
      tags.p([`To auto-challenge Stockfish and save your progress `,
              tags.a({ href: '/auth' }, [`Login with Lichess`])
             ]),
    ]);
  }

  return tags.div([
    tags.p(`Hello ${ctx.user.id}`),
    tags.p('Select a position to play.'),
    tags.p('You will challenge from the position, to Stockfish Level 8 on Lichess.'),
    tags.p('You have to win or make a draw with current color to succeed.'),
    tags.p(`If you can't succeed on the first try, you can rematch the AI and try again.`),
    tags.p(`You might have to abort the opposite color and rematch again to try with the required color.`),
    tags.p(`After you succeed your progress will be saved on this page.`)
  ]);

};

module.exports = (chapters, sections, exercises) => ctx => 
layout('Free Chess Articles', [
  bits.info(ctx),
  tags.div({ cls: ['home'] }, [
    tags.div([
      tags.ul(chapters.map(bits.chapter(sections, exercises)))
    ])
  ])  
], {
  openGraph: openGraph({
    title: "Free chess articles",
    description: trans.siteDescription,
    url: e.env.domain,
    image: helper.assetUrl("images/Chessishard.png")
  })
});
