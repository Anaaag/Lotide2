const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
};

//Test Code
assertEqual("Lighthouse labs", "Bootcamp");
assertEqual(1,1);
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1.5);
