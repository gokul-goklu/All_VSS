const Pattern2 = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 1) {
      console.log("###");
    } else {
      console.log(i);
    }
  }
};

Pattern2(8);
