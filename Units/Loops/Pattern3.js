const Pattern3 = (n) => {
  for (i = 1; i <= n; i++) {
    if (i % 2 == 0) console.log(i);
    else console.log(`${i}${i}${i}${i}`);
  }
};

Pattern3(6);
