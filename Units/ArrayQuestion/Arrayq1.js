const arr = [1, 3, 1.5];

// Write a function to calcuate the sum of every element of an array

const arrSum = (input) => {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum = sum + input[i];
  }
  return sum;
};

console.log(arrSum(arr));
