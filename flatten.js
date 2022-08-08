const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = flatten;

assertArraysEqual(flatten([1, 2, [3, 4], 5, 6]), [1, 2, 3, 4, 5, 6]);