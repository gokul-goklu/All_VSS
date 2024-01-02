let c = 0;
function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}

console.log(add(5)(3)(2)(34)(54)());
