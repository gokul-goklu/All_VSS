let c = 0;
function myMemo(f) {
  let result = {};
  return function (...args) {
    var num = JSON.stringify(args);
    if (!result[num]) {
      result[num] = f(...args);
    }
    return result[num];
  };
}
const product = (n1, n2) => {
  for (let i = 0; i < 10000000; i++) {}
  c = n1 * n2;
  return c;
};
const mem = myMemo(product);
console.time("start");
console.log();
console.timeEnd("start");
