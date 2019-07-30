const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {

  const ab = {
    a: "1",
    b: "2"
  };
  
  const ba = {
    b: "2",
    a: "1"
  }
  
  const abc = {
    a: "1",
    b: "2",
    c: "3"
  }
  
  const cd = {
    c: "1",
    d: ["2", 3]
  };

  const cd2 = {
    c: "1",
    d: ["2", 3, 4]
  };
  
  const dc = {
    d: ["2", 3],
    c: "1"
  };
  
  it("should return true for { a: { z: {a: 1, b: {c: {a: 1, b: {c: 9}}}} }, b: 2 } and { a: { z: {a: 1, b: {c: {a: 1, b: {c: 9}}}} }, b: 2 }", () => {
    assert.equal(eqObjects({ a: { z: {a: 1, b: {c: {a: 1, b: {c: 9}}}} }, b: 2 }, { a: { z: {a: 1, b: {c: {a: 1, b: {c: 9}}}} }, b: 2 }), true);
  })

    it("should return false for ab, abc", () => {
    assert.equal(eqObjects(ab, abc), false);
  })
  
  it("should return true for cd, dc", () => {
    assert.equal(eqObjects(cd, dc), true);
  })

})



// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);
// assertEqual(eqObjects(abc, ab), false);
// assertEqual(eqObjects(ab, cd), false);
// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);
// assertEqual(eqArrays(cd.d, cd2.d), false);

// let result1 = eqObjects({ a: { z: {a: 1, b: {c: {a: 1, b: {c: 9}}}} }, b: 2 }, { a: { z: {a: 1, b: {c: {a: 1, b: {c: 9}}}} }, b: 2 }) // => true
// let result2 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => false
// let result3 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false
// let result4 = eqObjects({ a: { y: 0, z: {a: 1, b: {c: 9}} }, b: 2 }, { a: 1, b: 2 }) // => false
// let result5 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false