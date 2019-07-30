const findKeyByValue = function(obj, val) {
  let objKeys = Object.keys(obj);
  let index = 0;
  for (let element in obj) {
    if (obj[element] === val) {
      return objKeys[index];
    }
    index++;
  }
  return undefined;
}

module.exports = findKeyByValue;