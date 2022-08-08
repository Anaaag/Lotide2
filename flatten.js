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

const flatten = function(arrOne) {
  let newArr = [];
  for (let i = 0; i < arrOne.length; i++)  {
   if (Array.isArray(arrOne[i])) {
    for (let j = 0; j < arrOne[i].length; j++) {
      newArr.push(arrOne[i][j])
    }
    continue;
   } 
   newArr.push(arrOne[i])
  }
  return newArr;
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, 6]), [1, 2, 3, 4, 5, 6]);