const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    // console.log("Arrays not equal length")
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && (eqArrays(array1[i], array2[i]) === false)) {
      // if it is an array && the arrays are not equal then return false;
      return false;
    }
    if (!(Array.isArray(array1[i])) && array1[i] !== array2[i]) {
      // if the element is not an array and the items are not equal then return false
      return false;
    }
  } 
  return true;
};

// assertEqual("String", "String");
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("1", 1);
// assertEqual(1, 2);

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => true
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); // => false
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

let result1 = eqArrays([[2, 3], [4]], [[2, 3], [4]]); // => true
let result2 = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]); // => false
let result3 = eqArrays([[2, 3], [4]], [[2, 3], 4]); // => false
console.log(result1);
console.log(result2);
console.log(result3);
