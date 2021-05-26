const input = process.argv.slice(2);
let reverseLetter = ''
let n = 0

while (input[n]) {
  let args = input[n];
  for (let i = args.length - 1; i >= 0; i--){
    reverseLetter += args[i];
  };
  console.log(reverseLetter);
  reverseLetter = '';
  n ++;
};

