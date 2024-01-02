const square = (x) => x * x;
const doubles = (x) => x * 2;
const result = compose(square, doubles);
console.log(result(3));
