function Animal(n) {
  this.name = n;
}
Animal.prototype.setName = function () {
  console.log(this.name);
};

const cat = new Animal("dog");
cat.setName();
