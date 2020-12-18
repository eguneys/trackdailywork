let { nextString } = require('./random');

const isProd = process.env.NODE_ENV === 'production';

let fixtures = {};

fixtures.draftId = () => nextString(8);
fixtures.sessionId = () => nextString(8);
fixtures.articleId = () => nextString(8);

fixtures.Moderate = 1;
fixtures.Accepted = 2;
fixtures.Denied = 3;

fixtures.chapters = [
  { id: '6', chapter: 6, name: 'Bishops of the Same Color' }
];

fixtures.sections = [
  { id: '6-1', chapterId: '6', name: 'Minimal Material' }
];

fixtures.exercises = [
  { id: '6-1', sectionId: '6-1', fen: '2KB4/1P6/2k5/8/8/8/7b/8 w - - 0 1' },
  { id: '6-2', sectionId: '6-1', fen: '8/1B6/8/K5k1/1P6/8/8/3b4 b - - 0 1' },
  { id: '6-3', sectionId: '6-1', fen: '1kb1B3/4K3/2Pp4/1p6/8/8/8/8 w - - 0 1' },
  { id: '6-4', sectionId: '6-1', fen: '8/5K1p/2k1P3/8/1b6/6B1/8/8 w - - 0 1' },
  { id: '6-5', sectionId: '6-1', fen: '8/1B6/2P1b3/7k/8/2p2P2/1pP3P1/1K6 w - - 0 1' },
];


if (!isProd) {

  fixtures.chapters = fixtures.chapters.concat([
    { id: '0', chapter: 0, name: 'Test Dev' },
  ]);

  fixtures.sections = fixtures.sections.concat([
    { id: '0-1', chapterId: '0', name: 'Mate in 1' }
  ]);

  fixtures.exercises = fixtures.exercises.concat([
    { id: '0-1', sectionId: '0-1', fen: '8/8/8/8/8/4k3/q7/4K3 w - - 0 1' },
    { id: '0-2', sectionId: '0-1', draw: true, fen: '8/8/8/8/8/4k3/q7/4K3 b - - 0 1' },
  ]);
}

module.exports = fixtures;
