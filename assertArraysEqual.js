// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
      return false;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  return true;
};

// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 'a']))
