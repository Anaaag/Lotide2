const assertArraysEqual = require('./assertArraysEqual');

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


module.exports = middle;


