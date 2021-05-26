// FUNCTION IMPLEMENTATION
const without = function(array1, array2) {
  let newArray = [];
  for (let a1Index = 0; a1Index < array1.length; a1Index++) {
    for (let a2Index = 0; a2Index < array2.length; a2Index++) {
      if (array1[a1Index] === array2[a2Index]) {
        array1.splice(a1Index,1);
        a1Index --;
        break
      }
    }
  }
  console.log(array1);
  return array1;
};

without(["1", "2", "3"], [1, '2', 3]) // => ["1", "2"]