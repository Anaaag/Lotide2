
const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  
  for (const key in obj1) {
    if (Array.isArray(obj1[key])) {
      const keyValue1 = obj1[key];
      const keyValue2 = obj2[key];
      if (keyValue1 === undefined || keyValue2 === undefined) {
        return false;
      }
      if (!eqArrays(keyValue1, keyValue2)) {
        return false;
      }
    }
  }
  return true;

};

module.exports = eqObjects;


