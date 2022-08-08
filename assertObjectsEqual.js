const eqObjects = require('./');


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect
  console.log((eqObjects(actual, expected)))
  if(eqObjects(actual, expected)) {
    console.log(`✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(eqObjects(ab, ba), true);
assertObjectsEqual(eqObjects(cd, dc), true);