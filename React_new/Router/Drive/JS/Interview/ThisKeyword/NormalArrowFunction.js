const name = "arrows";
const normal = {
  name: "gokul",
  age: 23,
  parent() {
    console.log(this.name);
  },
  child: {
    newName: "Shanmugam",
    getDetails() {
      console.log(this.newName + " " + this.name);
    },
    arrow: () => {
      console.log(this.newName);
    },
  },
};
normal.parent(); //gokul as normal function this refers to the immediate parent
normal.child.getDetails(); //shanmugam undef
normal.child.arrow();
