const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// const eqObjects = function(object1, object2) {
//   if (Object.keys(object1).length !== Object.keys(object2).length) {
//     return false;
//   } else if (Array.isArray(object1) && Array.isArray(object2)){
//     return eqArrays(object1, object2);
//   } else {
//     for (let key in object1) {
//       if (object1[key] !== object2[key]) {
//         return false;
//       }
//     }
//   } return true;
// };
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key in object1) {
      if (Array.isArray(object1[key])) {
        if (eqArrays(object1[key], object2[key]) === false) {
          // console.log(object2[key]);
          return false;
        }
      } else if (typeof object1[key] === 'object') {
        if (eqObjects(object1[key], object2[key]) === false) {
          // console.log(object2[key]);
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  } 
  return true;
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log("Arrays not equal length")
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};

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

const dc = {
  d: ["2", 3],
  c: "1"
};

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);
// assertEqual(eqObjects(abc, ab), false);
// assertEqual(eqObjects(ab, cd), false);



const cd2 = {
  c: "1",
  d: ["2", 3, 4]
};

// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);
// assertEqual(eqArrays(cd.d, cd2.d), false);

// let result1 = eqObjects({ a: { z: {a: 1, b: {c: {a: 1, b: {c: 9}}}} }, b: 2 }, { a: { z: {a: 1, b: {c: {a: 1, b: {c: 9}}}} }, b: 2 }) // => true
// let result2 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => false
// let result3 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false
// let result4 = eqObjects({ a: { y: 0, z: {a: 1, b: {c: 9}} }, b: 2 }, { a: 1, b: 2 }) // => false
// let result5 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);

// console.log(typeof {});