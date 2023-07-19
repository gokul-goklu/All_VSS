const longestPalindrome = (str) => {
  let res = 0;
  const str2 = str.split(" ");

  for (let k = 0; k < str2.length; k++) {
    if (Palindrome(str2[k])) {
      if (res < str2[k]) {
        res = str2[k].length;
      }
    }
  }

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
  console.log(res);
};
str12 = "madam is malayalam";
longestPalindrome(str12);
