const letterPositions = require('../letterPositions.js')
const assert = require('chai').assert

describe("#letterPositions", () => {

  it("should output object { h: [0], e: [1], l: [2,3], o: [4] when passed 'hello", () => {
    assert.deepEqual(letterPositions("hello"), {
      h: [0],
      e: [1],
      l: [2,3],
      o: [4]
    });
  })
})