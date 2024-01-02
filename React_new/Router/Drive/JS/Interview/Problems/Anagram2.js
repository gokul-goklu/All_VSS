let str1 = "icemans";
let str2 = "cinemaz",
  c = 0,
  f = 1;
let result = new Array().fill(str1.length);
for (let i = 0; i < str1.length; i++) {
  if (result[str1[i]]) result[str1[i]] += 1;
  else result[str1[i]] = 1;
}
for (let i = 0; i < str2.length; i++) {
  if (result[str2[i]]) result[str2[i]] -= 1;
}
for (let i = 0; i < str1.length; i++) {
  if (result[str1[i]] != 0) f = 0;
}
if (f) console.log("iam anagram");
else console.log("iam not");
console.log(result);
