let x = 5;

function example() {
  console.log(x);

  if (true) {
    let x = 10;
    const y = 15;
    console.log(x + y);
  }

  console.log(x);
}

example();
console.log(x);
