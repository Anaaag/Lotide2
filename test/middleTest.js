const assertArraysEqual = require('../assertEqual');
const middle = require('../middle');
const assert = require('chai').assert;


describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), [])
  })
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2])
  })
  it("returns [2, 3] for [1, 2, 3, 4", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
  })
});






