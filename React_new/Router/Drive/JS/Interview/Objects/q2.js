//json stringify and json parse
//json stringify used to convert object into string
//json parse is used to convert stringified data into normal objects
//It is mainly used in local storage as there it cannot be stored as objects it is stored only as string
//
const data = {
  name: "gokul",
  age: 23,
};
const d1 = JSON.stringify(data);
console.log(d1);
localStorage.setItem("test", d1); //inspect-application-local
const d2 = JSON.parse(d1);
console.log(d2);
