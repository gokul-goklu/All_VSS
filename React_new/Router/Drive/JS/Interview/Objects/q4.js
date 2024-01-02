let data = {
  name: "gokul",
  age: 23,
  number: 53435,
};
const d = JSON.stringify(data, ["age", "number"]);
console.log(data);
