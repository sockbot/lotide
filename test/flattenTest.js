const flatten = require('../flatten.js');
// const assertArraysEqual = require('../assertArraysEqual')
const assert = require('chai').assert;

describe('#flatten', () => {
  it("returns [1,2,3,4,5,6] when passed [1,2,[3,4],5, [6]]", () => {
    let testArray = [1, 2, [3, 4], 5, [6]];
    assert.deepEqual(flatten(testArray), [1,2,3,4,5,6]);
  })
})