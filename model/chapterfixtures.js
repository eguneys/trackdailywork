let cf = {};

cf.explanations = [
  { id: '1-1', sectionId: '1-1', name: `Key Squares`,
    content: `
A Key square is when the king occupies it, it is a win regardless of whose turn it is to move.

<keyd5 8/3k4/8/3K4/3P4/8/8/8 w - - 0 1>

<keyc5 2k5/8/2K5/2P5/8/8/8/8 w - - 0 1>

King on d5 doesn't win. Key squares are c6 d6 and e6.

=keyd5 0

King on c5 wins because key squares are: b7 c7 d7 and also b6 c6 d6.

=keyc5 0


# J. Moravec, 1952

<moravec 2k5/8/8/7p/8/8/6P1/5K2 w - - 0 1>

=moravec 0

<moravec 1. Kf2 h4 2. Kg1> !!

The natural line <naturalKf3 moravec 2. Kf3 h3 3. g4 Kd7 4. Kg3 Ke6 5. Kxh3 Kf6 6. Kh4 Kg6> and white cannot gain control of the key squares.

<moravec 2... h3 3. g3> !

<moravec 3... Kd7 4. Kh2 Ke6 5. Kxh3 Kf5 6. Kh4 Kg6 7. Kg4> ⊙ +−.
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
  { id: '1-3', sectionId: '1-3', name: `Mined Squares`, content: `
Mined squares is a pair of squares that correspond. You must either first allow your opponent to step on the mined square, or avoid it.

<untouchablepawns 8/2k5/8/1Pp5/8/1K6/8/8 w - - 0 1>

=untouchablepawns 0

b6 for black and c4 for white is mined.

<mined1 8/8/1k1p4/3P1K2/8/8/8/8 w - - 0 1>

=mined1 0

<mined1 1. Kf6 Kb5 2. Ke7 Kc5 Ke6> ⊙ +-

F. Sackmann's Study

<fsackmann 8/8/k1p5/2P5/K7/P7/8/8 b - - 0 1>

=fsackmann 0

White must get the king to d6. a6 and b4 are corresponding squares. 

<fsackmann 1... Kb7 2. Kb3 Ka6 3. Kb4> ⊙
 <fsackmann 3... Kb7>

Also d4 and b5 is corresponding squares, so white must avoid d4. 

<fsackmann 4. Kc4 Ka6 5. Kd3> !! <fsackmann 5... Ka5 6. Ke4 Kb5 7. Kd4> (black is in zugzwang)
 <fsackmann 7... Ka4 8. Ke5 Kxa3 9. Kd6> +-
` },
  { id: '1-4', sectionId: '1-4', name: `Triangulation`, content: `
Triangulation, is a king maneuver that aims to lose a tempo and leave the opponent with the move.

<triang 8/1p1k4/1P6/2PK4/8/8/8/8 w - - 0 1>

White to move
=triang 0

d5 and d7 squares are in correspondence. White loses a tempo and puts the opponent in zugzwang.

<triang 1. Ke5 Kc6 2. Kd4 Kd7 3. Kd5> 
White used triangulation, it's the same position with black to move.

<triang 3... Kc8 4. Ke6> (diagonal opposition)
 <triang 4... Kd8 5. Kd6> (vertical opposition)
 <triang 5... Kc8 6. Ke7 Kb8 7. Kd7 Ka8 8. c6> +-

When the pawn structure changes, the system of key squares and corresponding squares changes.
` },
  { id: '1-5', sectionId: '1-5', name: `Other Cases of Correspondence` },
  { id: '1-6', sectionId: '1-6', name: `The Rule of the Square` },
  { id: '1-7', sectionId: '1-7', name: `Reti's Idea` },
  { id: '1-8', sectionId: '1-8', name: `The Floating Square` },
  { id: '1-9', sectionId: '1-9', name: `Queen vs Pawns` },
  { id: '1-10', sectionId: '1-10', name: `Pawn Races` },
  { id: '1-11', sectionId: '1-11', name: `The Active King - Widening The Beachhead` },
  { id: '1-12', sectionId: '1-12', name: `The King Routes - Zigzag` },
  { id: '1-13', sectionId: '1-13', name: `The King Routes - Pendulum` },
  { id: '1-14', sectionId: '1-14', name: `The King Routes - Shouldering` },
  { id: '1-15', sectionId: '1-15', name: `Breakthrough` },
  { id: '1-16', sectionId: '1-16', name: `The Outside Passed Pawn` },
  { id: '1-17', sectionId: '1-17', name: `The Rook's Pawns with an Extra Pawn on the Opposite Wing` },

  { id: '1-18', sectionId: '1-18', name: `The Protected Passed Pawn - Two Pawns to One` },
  { id: '1-19', sectionId: '1-19', name: `The Protected Passed Pawn - Multi-Pawn Endgames` },

  { id: '1-20', sectionId: '1-20', name: `Undermining` },
  { id: '1-21', sectionId: '1-21', name: `Two Connected Passed Pawns` },


  { id: '1-22', sectionId: '1-22', name: `Stalemate - The Stalemate Refuge` },
  { id: '1-23', sectionId: '1-23', name: `Stalemate - Semi-Stalemate` },

  { id: '1-24', sectionId: '1-24', name: `Reserve Tempi - Exploiting Reserve Tempi` },
  { id: '1-25', sectionId: '1-25', name: `Reserve Tempi - The g and h Pawns vs the h Pawn` },
  { id: '1-26', sectionId: '1-26', name: `Reserve Tempi - Both Sides Have Reserve Tempi` }
];

module.exports = cf;
