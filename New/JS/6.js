var a = 5;
var c = 100;
function outer() {
  var b = 10;

  function inner() {
    c = 15;
    console.log(a + b + c);
  }

  inner();
}
console.log(c);
outer();
