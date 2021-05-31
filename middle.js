// FUNCTION IMPLEMENTATION
const middle = function(array) {
  if (array.length < 3) {
    return []
  }
  let startIndex = Math.ceil(array.length / 2 - 1)
  let endIndex = Math.floor(array.length /2 + 1)
  return array.slice(startIndex,endIndex)
  
};

module.exports = middle;

// console.log(middle([1,2,3,4,5]), middle([1,2,3,4,5,6]), middle([1]))