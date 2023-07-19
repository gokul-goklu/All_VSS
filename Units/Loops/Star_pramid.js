const Star = (n) => {
  for (let i = 0; i < n; i++) {
    let hed = "";
    let tail = "";
    let mid = "";
    if (i != 0)
      for (j = 0; j <= i; j++) {
        hed = hed + " ";
        tail = tail + " ";
      }
    mid = "";
    for (k = i; k < n; k++) {
      mid = mid + "*";
    }
    let res = hed + mid;
    console.log(res);
  }
};
Star(9);
