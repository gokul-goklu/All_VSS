let str1 = "iceman";
let str2 = "cinema",
  c = 0;

for (let i = 0; i < str1.length; i++) {
  for (let j = 0; j < str2.length; j++) {
    if (str1[i] == str2[j] && str2[j] != null) {
      str1[i] = null;
      str2[j] = null;
      c++;
      break;
    }
  }
}
if (c == str2.length) console.log("Anagram");
else console.log("not it is");
