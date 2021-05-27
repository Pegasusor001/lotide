const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // ...
  if (eqObjects (actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Passed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  }
  
  for (let keys in object1) {
    if (typeof (object1[keys]) === 'object') {
      // compare accodring to rule of array. 
      if (eqArrays(object1[keys], object2[keys])) { 
        continue
      } else {
      return false
      }
    } else {
      // compare according to rule of value. 
      if (object1[keys] === object2 [keys]) {
        continue
      } else {
        return false
      }
    }
  }
  return true

};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length){
    return false
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
a = assertObjectsEqual(ab, ba);
b = assertObjectsEqual(ab, abc); 
// console.log(a, b);