const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const key in obj1) {
    if (Array.isArray(obj1[key])) {
      const keyValue1 = obj1[key];
      const keyValue2 = obj2[key];
      if (!eqArrays(keyValue1, keyValue2)) {
        return false;
      }
    }
    return true;
  }

};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect
  if(eqObjects(actual, expected)) {
    console.log(`✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };



assertObjectsEqual(eqObjects(ab, ba), true);