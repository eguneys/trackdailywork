let { nextString } = require('./random');

const isProd = process.env.NODE_ENV === 'production';

let fixtures = {};

fixtures.chapters = [
  { id: '2', chapter: 2, name: 'Knight vs. Pawns' },
  { id: '3', chapter: 3, name: 'Knight Endgames' },
  { id: '4', chapter: 4, name: 'Bishop versus Pawns' },
  { id: '5', chapter: 5, name: 'Opposite-Colored Bishops' },
  { id: '6', chapter: 6, name: 'Bishops of the Same Color' }
];

fixtures.sections = [

  { id: '2-1', chapterId: '2', name: `King in the Corner` },
  { id: '2-2', chapterId: '2', name: `Knight vs. Rook's Pawn` },
  { id: '2-3', chapterId: '2', name: `The Knight Defends the Pawn` },

  { id: '3-1', chapterId: '3', name: `The Deflecting Knight Sacrifice` },
  { id: '3-2', chapterId: '3', name: `Botvinik's Formula` },
  { id: '3-3', chapterId: '3', name: `Pawns on the Same Side` },

  { id: '4-1', chapterId: '4', name: `Bishop and Rook's Pawn` },
  { id: '4-2', chapterId: '4', name: `Pawns at h6 and h7` },
  { id: '4-3', chapterId: '4', name: `Pawns at g6 and g7` },
  { id: '4-4', chapterId: '4', name: `Bishop at h7 and Pawn at g6` },
  { id: '4-5', chapterId: '4', name: `Bishop vs. Disconnected Pawns` },
  { id: '4-6', chapterId: '4', name: `Bishop vs. Connected Pawns` },
  
  { id: '5-1', chapterId: '5', name: 'Bishop and Two Connected Pawns vs. Bishop' },
  { id: '5-2', chapterId: '5', name: 'Separated Passed Pawns' },
  { id: '5-3', chapterId: '5', name: 'The King Blockades the Passed Pawn' },
  { id: '5-4', chapterId: '5', name: 'The Bishop Restrains the Passed Pawn' },
  { id: '6-1', chapterId: '6', name: 'Minimal Material' }
];

fixtures.exercises = [

  { id: '2-1', sectionId: '2-1', draw: true, fen: '8/8/8/8/8/4K2p/4N2k/8 w - - 0 1' },
  { id: '2-2', sectionId: '2-1', draw: true, fen: '1R6/7p/8/8/8/3k1r2/7P/n5K1 w - - 0 1' },
  { id: '2-3', sectionId: '2-1', draw: true, fen: '7K/n2k4/P6P/r6P/8/8/8/8 w - - 0 1' },

  { id: '2-4', sectionId: '2-2', fen: '8/1p3pkp/6p1/P2Pp3/2B1n3/6P1/5PKP/8 w - - 0 1' },
  { id: '2-5', sectionId: '2-2', draw: true, fen: '7N/2K5/8/8/7p/2k5/8/8 w - - 0 1' },
  { id: '2-6', sectionId: '2-2', draw: true, fen: '8/4k2N/7p/1p6/8/8/K7/8 w - - 0 1' },
  { id: '2-7', sectionId: '2-2', fen: '8/8/4N3/p6p/P1P4b/4kp2/8/5K2 w - - 0 1' },

  { id: '2-8', sectionId: '2-3', fen: '5K2/8/p7/1k6/8/8/1P1N4/8 w - - 0 1' },
  { id: '2-9', sectionId: '2-3', draw: true, fen: '8/6p1/7p/p1N5/6PP/2k5/8/3K4 b - - 0 1' },

  { id: '3-1', sectionId: '3-1', fen: '1n4N1/8/4p1P1/kp2p3/p3P3/8/K7/8 w - - 0 1' },
  { id: '3-2', sectionId: '3-1', draw: true, fen: '8/K5p1/1p5k/1P5p/P1n5/5N2/8/8 w - - 0 1' },

  { id: '3-3', sectionId: '3-2', fen: '6k1/6p1/6Pp/ppp5/3pn2P/1P3K2/1PP2P2/3N4 b - - 0 1' },
  { id: '3-4', sectionId: '3-2', fen: '8/8/1N2kp2/8/P2K2n1/8/8/8 w - - 0 1' },
  { id: '3-5', sectionId: '3-2', fen: '8/8/pp3K2/3k2P1/1P5n/P5N1/8/8 w - - 0 1' },
  { id: '3-6', sectionId: '3-2', fen: 'k4n2/8/8/2N1P3/5K2/8/8/8 w - - 0 1' },
  { id: '3-7', sectionId: '3-2', fen: '5N2/7p/6p1/k1K2p2/P4P2/6P1/7P/5n2 w - - 0 1' },


  { id: '4-1', sectionId: '4-1', fen: '8/8/8/8/8/2K4B/5k1P/8 w - - 0 1' },
  { id: '4-2', sectionId: '4-1', fen: '6B1/8/2K5/8/8/5k1P/8/8 w - - 0 1' },
  { id: '4-3', sectionId: '4-1', fen: '5B2/p7/3p4/PPk5/8/8/4K3/8 w - - 0 1' },

  { id: '4-4', sectionId: '4-2', draw: true, fen: '6k1/8/P7/5p2/2pP2p1/2pb2Pp/3N1P1P/4K3 w - - 0 1' },

  { id: '4-5', sectionId: '4-3', fen: '8/6p1/8/6P1/K7/8/1kB5/8 w - - 0 1' },
  { id: '4-6', sectionId: '4-3', draw: true, fen: '2b3R1/6P1/2p5/8/pP3k2/3p4/1P5p/K7 w - - 0 1' },

  { id: '4-7', sectionId: '4-4', draw: true, fen: '2b3R1/6P1/2p5/8/pP3k2/3p4/1P5p/K7 w - - 0 1' },
  { id: '4-8', sectionId: '4-4', draw: true, fen: '8/8/3k4/1p6/8/2P1P3/2P1K3/1b6 w - - 0 1' },

  { id: '4-9', sectionId: '4-5', fen: '8/5p2/N1p3p1/3pP1P1/7P/2kP4/Pb6/7K w - - 0 1' },
  { id: '4-10', sectionId: '4-5', fen: '8/8/1b5P/kP6/8/5K2/1P6/8 w - - 0 1' },
  
  { id: '4-11', sectionId: '4-6', draw: true, fen: '8/5k2/7P/3K1PP1/8/8/1b6/8 b - - 0 1' },
  { id: '4-12', sectionId: '4-6', fen: '8/p2b1p2/3k1P2/2p5/2p2K1P/2P3P1/P4P2/8 b - - 0 1' },

  { id: '5-1', sectionId: '5-1', draw: true, fen: '8/8/3k4/8/3PP3/4K3/8/4Bb2 b - - 0 1' },
  { id: '5-2', sectionId: '5-1', draw: true, fen: '2B5/8/3kp3/1P3pp1/3b4/7P/6K1/8 w - - 0 1' },

  { id: '5-3', sectionId: '5-2', draw: true, fen: '1b6/8/2P5/6KB/8/4kP2/8/8 b - - 0 1' },
  { id: '5-4', sectionId: '5-2', fen: '8/pkP3P1/3B4/8/3K4/1b6/8/8 w - - 0 1' },
  { id: '5-5', sectionId: '5-3', draw: true, fen: '8/3k4/2p5/1pK5/1P1P3P/P4bB1/8/8 b - - 0 1' },

  { id: '5-6', sectionId: '5-4', draw: true, fen: '8/6k1/8/5p2/2Bb3p/p6P/4KP2/8 w - - 0 1' },
  { id: '5-7', sectionId: '5-4', fen: '8/2k5/5p1b/p1pBpP1P/2P5/1PK2P2/P7/8 w - - 0 1' },


  { id: '6-1', sectionId: '6-1', fen: '2KB4/1P6/2k5/8/8/8/7b/8 w - - 0 1' },
  { id: '6-2', sectionId: '6-1', draw: true, fen: '8/1B6/8/K5k1/1P6/8/8/3b4 b - - 0 1' },
  { id: '6-3', sectionId: '6-1', fen: '1kb1B3/4K3/2Pp4/1p6/8/8/8/8 w - - 0 1' },
  { id: '6-4', sectionId: '6-1', fen: '8/5K1p/2k1P3/8/1b6/6B1/8/8 w - - 0 1' },
  { id: '6-5', sectionId: '6-1', fen: '8/1B6/2P1b3/7k/8/2p2P2/1pP3P1/1K6 w - - 0 1' },
];


if (false && !isProd) {

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
