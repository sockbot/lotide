/*
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1 [i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed : ${actual} !== ${expected}`);
  }
};
*/

const middle = function(array) {
  let array_result = []; //Initialize it to empty array
  if (array.length <= 2 && array.length > 0) {
    // For arrays with one or two elements, there is no middle. Return an empty array.
    return array_result;
  } else if (array.length % 2 === 0) {
      // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
      return array_result = [array[(array.length / 2) - 1], array[array.length / 2]];
    } else {
      // For arrays with odd number of elements, an array containing a single middle element should be returned.
      return array_result = array[(array.length - 1) / 2];
    }
};

module.exports = middle;