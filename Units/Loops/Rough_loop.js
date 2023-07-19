const Star = (n) => {
  let res = "";
  if (n % 2 == 0) {
    for (let i = 1; i < n; i++) {
      for (let j = i; j < n; j++) {
        res = res + "*";
      }
      res = res + "\n";
      for (let k = 1; k <= i; k++) {
        res = res + " ";
      }
      n = n - 1;
    }
    console.log(res);
  } else {
    n = n + 1;
    for (let i = 1; i < n; i++) {
      for (let j = i; j < n; j++) {
        res = res + "*";
      }
      res = res + "\n";
      for (let k = 1; k <= i; k++) {
        res = res + " ";
      }
      n = n - 1;
    }
    console.log(res);
  }
};
Star(9);
