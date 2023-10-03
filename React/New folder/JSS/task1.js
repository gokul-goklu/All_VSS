const test = "Coding1ma12rt5";
let sum = 0;
for (let i = 0; i < test.length; i++) {
  if (
    test[i] == 1 ||
    test[i] == 2 ||
    test[i] == 3 ||
    test[i] == 4 ||
    test[i] == 5 ||
    test[i] == 6 ||
    test[i] == 7 ||
    test[i] == 8 ||
    test[i] == 9
  ) {
    let j,
      c = 1;
    let combine;
    if (j - 1 == i) {
      combine = test[i] + test[j];
      c = 0;
    }
    j = i;
    if (c == 1) sum = sum + parseInt(test[i]);
    if (c == 0) sum = sum + parseInt(combine);
  }
}
console.log(sum);
