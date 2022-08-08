const eqArrays = function(arrOne, arrTwo) {
  if (arrOne === arrTwo) {
    return true;
  }
  if (arrOne === undefined || arrTwo === undefined) {
    return false;
  }
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;



