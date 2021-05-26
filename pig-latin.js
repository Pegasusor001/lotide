const input = process.argv.slice(2);
let pigLatinLetter = ''
let n = 0

while (input[n]) {
  let temp1 = input[n];
  let temp2 = temp1.slice(1) + temp1[0] + 'ay ';
  pigLatinLetter += temp2;
  n ++
};

pigLatinLetter = pigLatinLetter.slice(0,pigLatinLetter.length - 1);

console.log (pigLatinLetter)

