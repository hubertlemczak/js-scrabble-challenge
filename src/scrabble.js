// take inputted word

const letterValues = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10,
};

class Scrabble {
  constructor(word) {
    this.word = [];
    if (word != null) this.word.push(word.toUpperCase());
  }
  score() {
    let sum = 0;
    const letterMatch = Object.entries(letterValues);
    letterMatch.map((x) =>
      this.word.map((word) => {
        for (let i = 0; i < word.length; i++) {
          if (word[i].includes(x[0])) sum += x[1];
          if (word[i] === '[' && word[i + 1].includes(x[0])) sum += x[1];
          if (word[i] === '{' && word[i + 1].includes(x[0])) sum += x[1] * 2;
        }
      })
    );
    return sum;
  }
}

module.exports = Scrabble;
