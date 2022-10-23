
function sum(fromN, toN) {
  if (fromN === toN) {
    return fromN;
  } else {
    return fromN + sum(fromN + 1, toN);
  }



  // Sum all the values from fromN up to toN
  // for (let i = fromN; i < toN; i++) {
  //   fromN = fromN + 1 + i;
  // }

}

module.exports = sum;
