const eqArrays = function(arrOne, arrTwo) {
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

const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`✅✅Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`❌❌Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

const middle = function(arrOne) {
  let middElement = [];
  if (arrOne.length === 1 || arrOne.length === 2) {
    middElement = [];
  } else if (arrOne.length % 2 === 1) {
    middElement.push(arrOne[Math.floor((arrOne.length - 1) / 2)]);
  } else if (arrOne.length % 2 === 0) {
    middElement.push(arrOne[arrOne.length / 2 - 1], arrOne[arrOne.length / 2]);
  }
  return middElement;
};

//Test Cases
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1]), []);
