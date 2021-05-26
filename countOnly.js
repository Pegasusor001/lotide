const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (let criteria in itemsToCount) {
    if (itemsToCount[criteria]) {
      result[criteria] = 0;
      for (let items of allItems) {
        if (items === criteria) {
          result[criteria] ++;
        }
      }
    }
  }
  return result;
}

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

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1)