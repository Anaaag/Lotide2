const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let newarr = arr.slice(1);
  return newarr;
};

module.exports = tail;

