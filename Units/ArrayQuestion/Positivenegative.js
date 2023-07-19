const arr = [1, -3, 4, -8];

// Write a function to calcuate the sum of every element of an array

const arrPos = (input) => {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) sum = sum + input[i];
  }
  return sum;
};
const arrNeg = (input) => {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] < 1) sum = sum - input[i];
  }
  return sum;
};

console.log(arrPos(arr));
console.log(arrNeg(arr));
