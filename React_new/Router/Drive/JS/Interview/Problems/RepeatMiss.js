let arr = [4, 1, 1, 2, 3],
  same = 0;
arr.sort((a, b) => a - b);
let num = arr[1],
  c = 1;
for (let i = 0; i < arr.length; i++) {
  //missing
  if (c == arr[i] || c == arr[i + 1]) {
    c++;
  } else {
    break;
  }
}

for (let i = 1; i < arr.length; i++) {
  if (arr[i - 1] == arr[i]) {
    same = arr[i];
    break;
  }
}
console.log(`same number is ${same} and missing is ${c}`);
