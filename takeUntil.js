const takeUntil = function(array, callback) {
  result = [];
  for (items of array) {
    if (callback(items)) {
      return result
    } else {
      result.push(items)
    }
  }
}

// "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
