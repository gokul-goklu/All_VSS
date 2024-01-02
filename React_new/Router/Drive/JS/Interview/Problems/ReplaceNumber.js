const n = 1003;
const checkNumber = (n) => {
  n = n.toString();
  let checker = [...n],
    result = "";
  for (let i = 0; i < checker.length; i++) {
    if (checker[i] == "0") {
      result = result + "5";
    } else {
      result = result + checker[i];
    }
  }
  let c = parseInt(result);
  console.log(c);
};
checkNumber(n);
