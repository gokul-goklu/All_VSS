var a = 5;

function outer() {
  var b = 10;

  function inner() {
    var c = 15;
    console.log(a + b + c);
    let a = 10;
  }

  inner();
}

outer();