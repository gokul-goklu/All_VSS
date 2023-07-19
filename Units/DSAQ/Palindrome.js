const Palindrome = (str1) => {
  str1 = str1.toLowerCase();
  let str2 = "",
    j = 0;
  for (let i = str1.length - 1; i >= 0; i--) {
    str2 = str2 + str1[i];
  }
  for (i = 0; i < str1.length; i++) {
    if (str1[i] != str2[j++]) {
      return false;
    }
  }
  return true;
};
str1 = "Tenet";
console.log(Palindrome(str1));
