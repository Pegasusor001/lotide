const findKeyByValue = function(obj, value) {
  for (let keys in obj) {
    if (obj[keys] === value) {
      return keys
    }
  }
  return undefined
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

a = findKeyByValue(bestTVShowsByGenre, "The Wire")
console.log(a)
