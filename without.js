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

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) 
      newArray.push(source[i]);
  }
  return newArray;;
}

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]