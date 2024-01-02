const data = { n: 20 };
function multiply(x = { ...data }) {
  return (x.n *= 2);
}
console.log(multiply());
console.log(multiply());
console.log(multiply(data));
console.log(multiply(data));
