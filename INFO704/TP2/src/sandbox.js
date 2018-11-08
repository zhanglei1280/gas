const flatten = arrays => [].concat.apply([], arrays);
const range = (lo, hi) => [...new Array(hi - lo + 1)].map((_, i) => i + lo)
const join = joiner => list => list.join(joiner)

const charSeqs = (n, chars) => (n < 1) 
    ? [[]]
    : flatten(chars.map(char => charSeqs(n - 1, chars).map(
        seq => flatten([char].concat(seq))
      )))

const allCharSeqs = (n, chars) => flatten(range(1, n).map(i => charSeqs(i, chars)))

console.log(allCharSeqs(4, ["s1", "s2", "s3", "s4"]))