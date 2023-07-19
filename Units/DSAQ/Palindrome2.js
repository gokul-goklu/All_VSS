const Palindrome = (str1) => {
  str1 = str1.toLowerCase();
  let j = str1.length - 1;
  for (i = 0; i < str1.length / 2; i++) {
    if (str1[i] != str1[j--]) {
      return false;
    }
  }
  return true;
};
str1 = "Rotator";
console.log(Palindrome(str1));
