const assertArraysEqual = require('../assertEqual');
const middle = require('../middle');


//Test Cases
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1]), []);