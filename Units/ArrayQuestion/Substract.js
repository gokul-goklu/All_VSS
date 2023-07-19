const array = [
  5, -3, 10, -8, 2, -7, 15, -1, 6, -4, 12, -9, 3, -6, 11, -2, 8, -5, 14, -10,
];
const arrSum = (input) => {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum = sum - input[i];
  }
  return sum;
};

console.log(arrSum(arr));
