//console.log(this);
const obj = {
  name: "gokul",
  setName(n) {
    console.log("hello " + this.name + n);
  },
};
const change = {
  name: "rahul",
};
obj.setName.call(change, "dravid");
