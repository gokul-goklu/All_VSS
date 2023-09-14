let x = 5;

function example() {
  console.log(x);

  if (true) {
    x = 10;
    const y = 15;
    z = 20;
    console.log(x + y + z);
  }

  console.log(x);
}

example();
console.log(x);
console.log(z);