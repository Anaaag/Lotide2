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


const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
  return results;
};

module.exports = takeUntil;

const numbers = [2, 7, 15, 22];
const listOfFriends = ["cam", "kait", "serena", "emma"];
const numbers2 = [3, 5, 7, 8, 10];

//Test Cases
assertArraysEqual(takeUntil(numbers, x => x > 10), [2, 7]);
assertArraysEqual(takeUntil(listOfFriends, x => x === "serena"), ["cam", "kait"]);
assertArraysEqual(takeUntil(numbers2, x => x % 2 === 0), [3, 5, 7]);