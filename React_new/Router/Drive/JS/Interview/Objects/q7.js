let p = {
  name: "gokul",
  age: 23,
};
const f = [p];
p = null;
console.log(f); //prints the data of p as it will be null when p.name=null
