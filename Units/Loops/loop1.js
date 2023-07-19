const Runloop = (n) => {
  if (Number(n))
    for (i = 0; i < n; i++) {
      console.log("I:", i);
    }
  else console.log("err");
};
Runloop("20");
