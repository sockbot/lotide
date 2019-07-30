const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;