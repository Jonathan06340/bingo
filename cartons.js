// Configuration d origine V23 - valeurs chargees au premier demarrage ou apres restauration.
// Les reglages, numeros de passages et cartons modifies dans l interface sont conserves dans le localStorage du navigateur.
// Ce fichier reste la reference pour le bouton RESTAURER ORIGINE.

window.GAME_CONFIG = {
  ballsPerGame: 5
};

window.PAYTABLE = {
  stake: 1.0,
  line3: 0.5,
  line4: 1.0,
  line5: 10.0
};

// Distribution des 14 couloirs en points entiers. Total de reference = 1000.
// 1 point = 0,1 % lorsque le total vaut exactement 1000.
window.CORRIDOR_WEIGHTS = {
  A: 9,
  B: 18,
  C: 36,
  D: 63,
  E: 89,
  F: 125,
  G: 160,
  H: 160,
  I: 125,
  J: 89,
  K: 63,
  L: 36,
  M: 18,
  N: 9
};

// 28 passages physiques pour 25 numeros, melanges visuellement.
// Les doublons restent des doublons equivalant exactement a ceux de V11.
window.PASSAGES = {
  A: [8, 15],
  B: [3, 25],
  C: [18, 5],
  D: [21, 1],
  E: [4, 11],
  F: [23, 9],
  G: [13, 17],
  H: [7, 25],
  I: [19, 6],
  J: [14, 20],
  K: [22, 16],
  L: [24, 17],
  M: [2, 1],
  N: [10, 12]
};

window.CARTONS = [
  [
    [24, 14, 20, 8, 22],
    [18, 4, 11, 21, 3],
    [5, 6, 17, 15, 16],
    [10, 13, 12, 7, 25],
    [2, 19, 9, 1, 23]
  ],
  [
    [3, 1, 16, 22, 2],
    [17, 23, 20, 13, 14],
    [15, 9, 25, 11, 12],
    [24, 7, 6, 19, 10],
    [8, 21, 5, 4, 18]
  ],
  [
    [24, 22, 15, 10, 8],
    [4, 14, 20, 13, 23],
    [11, 16, 17, 12, 9],
    [7, 21, 6, 19, 25],
    [18, 1, 5, 2, 3]
  ],
  [
    [4, 25, 15, 8, 7],
    [1, 23, 9, 24, 2],
    [11, 16, 17, 5, 20],
    [21, 3, 6, 13, 19],
    [10, 22, 12, 18, 14]
  ]
];
