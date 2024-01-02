//normal function this refers to the current object
//but for the arrow function it refers to the window object

const data = {
  name: "gokul",
  diameter() {
    return "hello " + this.name;
  },
  perimeter: () => {
    return "How r u " + this.name;
  },
};
console.log(data.perimeter());
