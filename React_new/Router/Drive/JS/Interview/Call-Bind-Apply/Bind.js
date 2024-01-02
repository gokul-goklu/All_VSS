const obj = {
  name: "gokul",
  setName(sur, play) {
    console.log("hello " + this.name + sur + play);
  },
};
const change = {
  name: "rahul",
};
const bindChange = obj.setName.bind(change);
bindChange("good ", "boy");
//use bind when u want to invoke the function with this keyword later and again and again
