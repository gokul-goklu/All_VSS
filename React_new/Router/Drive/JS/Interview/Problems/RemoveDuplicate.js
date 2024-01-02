let s = "gokgokugl",
  p = "";
obj = {};
for (let i = 0; i < s.length; i++) {
  if (obj.hasOwnProperty(s[i])) obj[s[i]] = 1 + obj[s[i]];
  else obj[s[i]] = 1;
}
for (let key in obj) {
  p = p + key;
}
console.log(p);
