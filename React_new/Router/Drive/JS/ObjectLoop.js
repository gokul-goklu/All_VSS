const data = {
  a: 20,
  b: 30,
  c: 12,
};
const multiply = (data) => {
  for (key in data) {
    if (typeof data[key] == "number") {
      data[key] = data[key] * 2;
    }
  }
};
multiply(data);
console.log(data);
