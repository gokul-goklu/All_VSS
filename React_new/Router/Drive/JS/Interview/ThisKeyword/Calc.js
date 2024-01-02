const obj = {
  a: 10,
  b: 20,
  add() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

console.log(obj.add());
console.log(obj.mul());
