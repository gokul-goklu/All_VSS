// let a = "the quick brown fox jumpsoverthelazydog";
// let b = [...a.replace(/\s/g, "")];
// const c = new Set(b);
// console.log(c.size)

let a = "the quick brown fox jumpsoverthelazydog";
let result = new Array(26).fill(false);
for (let i = 0; i < a.length; i++) {
  let index;
  if (a[i] >= "A" && a[i] <= "Z") {
    index = a.charCodeAt(i) - "A".charCodeAt(0);
  }
  if (a[i] >= "a" && a[i] <= "z") {
    index = a.charCodeAt(i) - "a".charCodeAt(0);
  }
  result[index] = true;
}
for (let i = 0; i < result.length; i++) {
  if (!result[i]) console.log(false);
}
console.log(true);
