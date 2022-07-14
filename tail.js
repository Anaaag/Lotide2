const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let newarr = arr.slice(1);
  return newarr;
};

//Test Case #1
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

//Test Case #2
const arr = ["yo yo", "Lighthouse", "Labs"];
tail(arr);
assertEqual(arr.length, 3);


