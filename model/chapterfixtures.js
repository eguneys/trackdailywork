let cf = {};

cf.explanations = [
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
`}
];

module.exports = cf;
