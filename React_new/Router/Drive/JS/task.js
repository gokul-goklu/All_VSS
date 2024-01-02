let s = "12345",
  r = s.length - 1,
  l = 0;

for (let i = 0; i < s.length; i++) {
  for (let j = 0; j < s.length; j++) {
    if (r == j) {
      console.log(s[r--]);
    } else if (l == j) {
      console.log(s[l++]);
    } else {
      console.log(" ");
    }
  }
}
