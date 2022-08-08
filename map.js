const assertArraysEqual = require('./assertArraysEqual');


const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4,];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// const results1 = map(words, word => word[0]);

//Tests
assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(numbers, n => n * 2), [2, 4, 6, 8]);
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);