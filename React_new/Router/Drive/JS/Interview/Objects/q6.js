const dataFetch = (fruit, vegetable, ...arg) => {
  return [...fruit, ...arg, vegetable];
};
console.log(dataFetch(["apple", "orange"], "potato", "gokul"));
