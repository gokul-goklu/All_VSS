let word = "aeiuoaeiouAEioufhf";
let v = "aeiou",
  c = 0;
word = word.toLowerCase();
for (let i = 0; i < word.length; i++) {
  if (v.includes(word[i])) c++;
}
console.log(c);
