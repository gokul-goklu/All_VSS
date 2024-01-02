let s = "occurance",
  p = "";
let result = {};
for (let i = 0; i < s.length; i++) {
  if (result[s[i]]) result[s[i]] = result[s[i]] + 1;
  else result[s[i]] = 1;
}
console.log(result);
for (var key in result) {
  if (result.hasOwnProperty(key)) p = p + key + result[key];
}
console.log(p);
