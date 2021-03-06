const findKey = function(obj, func) {
  for (let items in obj) {
    if (func(obj[items])) {
      console.log(items)
      return items
    }
  }
};

module.exports = findKey;

// findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"