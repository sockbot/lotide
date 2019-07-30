const countOnly = function(allItems, itemsToCount) {
  // takes an array of itmes and an object of itemsToCount
  // returns an object containing the count of itemsToCount present in allItems
  const results = {};

  for (const item of allItems) {
    // console.log(item);
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  // console.log(results);
  return results;
}

module.exports = countOnly;