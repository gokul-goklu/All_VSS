const number = (n) => {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result = result + j;
    }

    console.log(result);
    result = "";
  }
};
number(4);
