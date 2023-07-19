const Runloop = (n) => {
  if (Number(n))
    for (i = n; i > 0; i--) {
      console.log("I:", i);
    }
  else console.log("err");
};
Runloop("20");
