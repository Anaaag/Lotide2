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

module.exports = countLetters;




