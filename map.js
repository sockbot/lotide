
const map = function(array, callback) {

  // console.log('array: ', array);
  // console.log('callback: ', callback);
  const results = [];

  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }

  return results;
}

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    // console.log("Arrays not equal length")
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g','c','t','m','t'])

const results2 = map(words, word => word[3]);
assertArraysEqual(results2, ['u','t', undefined, 'o', undefined]);

const results3 = map(words, word => word.length);
assertArraysEqual(results3, [6, 6, 2, 5, 3]);

