const palindromic = (str) => {
  str = str.toLowerCase().trim();
  let j = str.length - 1,
    c = 0;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[j--]) {
      break;
      c = 1;
    }
  }
  if (c == 0) console.log("Palindrome");
  else console.log("not palindrome");
};

let str = "madam";
palindromic(str);
