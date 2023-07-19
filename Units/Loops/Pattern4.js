const pattern4 = (n) => {
  let res = "";
  let m = n;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= m; j++) {
      res = res + j;
    }
    console.log(res);
    res = "";
    m--;
  }
};

pattern4(5);
