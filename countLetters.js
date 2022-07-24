const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(string) {
  const results = {};
  
  
  for (const letter of string) {
    if (letter === " ") continue;
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }

  }

  return results;
};

console.log(countLetters("cat in hat"));
