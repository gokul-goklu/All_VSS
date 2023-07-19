let j = 0;
const arr = "Ankit";
let result = "",
  crr = "";
const stringRev = (input) => {
  for (let i = input.length - 1; i >= 0; i--) {
    result = result + input[i];
  }
  return result;
};

console.log(stringRev(arr));
