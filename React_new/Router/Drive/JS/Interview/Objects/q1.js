let a = {};
const b = { key: "b" };
const c = { key: "c" };
a[b] = 23; //a[[object,object]]=23
a[c] = 45; //a[[object,object]]=45 23 is overlaped
console.log(a[b]);
