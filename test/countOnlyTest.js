const countOnly = require('../countOnly');
const assert = require('chai').assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe('#countOnly', () => {

  it('should return { Jason: 1 } when counting "Jason"', () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true }), { "Jason": 1 })
  })

  it('should return {} when counting "Karima"', () => {
    assert.deepEqual(countOnly(firstNames, { "Karima": true }), {})
  })

  it('should return { Fang: 2 } when counting "Fang', () => {
    assert.deepEqual(countOnly(firstNames, { "Fang": true }), { "Fang": 2 })
  })

  it('should return { Karl: 1, Fang: 2 } when counting "Karl and Fang"', () => {
    assert.deepEqual(countOnly(firstNames, { "Karl": true, "Fang": true }), { "Karl": 1, "Fang": 2 })
  })

  it('should return { Fang: 2 } when counting "Fang" and "Karima"', () => {
    assert.deepEqual(countOnly(firstNames, { "Fang": true, "Karima": true }), { "Fang": 2 })
  })
})