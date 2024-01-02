const obj = {
  name: "gokul",
  setName(sur, play) {
    console.log("hello " + this.name + sur + play);
  },
};
const change = {
  name: "rahul",
};
obj.setName.apply(change, [" dravid", " player"]);

// in apply u can pass n of data inside array as args to the function
