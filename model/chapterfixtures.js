let cf = {};

cf.explanations = [
  { id: '1-1', chapterId: '1', name: `Key Squares`,
    content: `

`},
  { id: '1-2', sectionId: '1-2', content: `
Corresponding squares are squares of reciprocal zugzwang.

# Opposition

Two kings standing on the same file with one square separating them is "close opposition", three or five squares is "distant opposition".

"get the opposition" is to achieve this position with the opponent to move.
"fall into opposition" is falling into zugzwang itself.

# F. Sackmann, 1913

<sackmann 8/8/2p5/k1p1K3/p1P5/P7/8/8 w - - 0 1>

White to move
=sackmann 0

<sackmann 1. Kf5 Kb6 2. Kf6>

Converting distant opposition to close opposition.

<sackmann 2... Kb7 3. Kf7 Kb6>

<sackmanne6 sackmann 3... Kb8 4. Ke6>

<sackmann 4. Ke8> outflanking
 <sackmann 4... Ka7 5. Ke7 Ka8 6. Kd6 Kb7 7. Kd7 Kb6 8. Kc8> +- .
`},
  { id: '1-3', chapterId: '1', name: `Mined Squares` },
  { id: '1-4', chapterId: '1', name: `Triangulation` },
  { id: '1-5', chapterId: '1', name: `Other Cases of Correspondence` },
  { id: '1-6', chapterId: '1', name: `The Rule of the Square` },
  { id: '1-7', chapterId: '1', name: `Reti's Idea` },
  { id: '1-8', chapterId: '1', name: `The Floating Square` },
  { id: '1-9', chapterId: '1', name: `Queen vs Pawns` },
  { id: '1-10', chapterId: '1', name: `Pawn Races` },
  { id: '1-11', chapterId: '1', name: `The Active King - Widening The Beachhead` },
  { id: '1-12', chapterId: '1', name: `The King Routes - Zigzag` },
  { id: '1-13', chapterId: '1', name: `The King Routes - Pendulum` },
  { id: '1-14', chapterId: '1', name: `The King Routes - Shouldering` },
  { id: '1-15', chapterId: '1', name: `Breakthrough` },
  { id: '1-16', chapterId: '1', name: `The Outside Passed Pawn` },
  { id: '1-17', chapterId: '1', name: `The Rook's Pawns with an Extra Pawn on the Opposite Wing` },

  { id: '1-18', chapterId: '1', name: `The Protected Passed Pawn - Two Pawns to One` },
  { id: '1-19', chapterId: '1', name: `The Protected Passed Pawn - Multi-Pawn Endgames` },

  { id: '1-20', chapterId: '1', name: `Undermining` },
  { id: '1-21', chapterId: '1', name: `Two Connected Passed Pawns` },


  { id: '1-22', chapterId: '1', name: `Stalemate - The Stalemate Refuge` },
  { id: '1-23', chapterId: '1', name: `Stalemate - Semi-Stalemate` },

  { id: '1-24', chapterId: '1', name: `Reserve Tempi - Exploiting Reserve Tempi` },
  { id: '1-25', chapterId: '1', name: `Reserve Tempi - The g and h Pawns vs the h Pawn` },
  { id: '1-26', chapterId: '1', name: `Reserve Tempi - Both Sides Have Reserve Tempi` }
];

module.exports = cf;
