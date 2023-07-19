const arr = [1, 3, 4, 8];

// Write a function to calcuate the sum of every element of an array

const arrEven = (input) => {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 == 0) sum = sum + input[i];
  }
  return sum;
};
const arrOdd = (input) => {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 == 1) sum = sum + input[i];
  }
  return sum;
};

console.log(arrOdd(arr));
console.log(arrEven(arr));
