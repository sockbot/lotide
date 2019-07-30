const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe("#findKeyByValue", () => {
  
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it("should return key 'drama' when given 'The Wire'", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
  });

  it("should return undefined when given 'That 70s Show'", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});