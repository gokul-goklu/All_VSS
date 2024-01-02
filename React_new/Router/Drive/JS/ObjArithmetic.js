const calc = {
  total: 0,
  add(a) {
    this.total = this.total + a;
    return this;
  },
  sub(b) {
    this.total = this.total - b;
    return this;
  },
  multiply(w) {
    this.total = this.total * w;
    return this;
  },
};

const result = calc.add(3).multiply(2).add(4).sub(2);
console.log(result.total);
