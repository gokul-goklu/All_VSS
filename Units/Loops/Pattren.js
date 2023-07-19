const Pattern = (n) => {
  let res = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) console.log("*");
    else console.log(`${i}${i}${i}`);
  }
};

Pattern(6);
