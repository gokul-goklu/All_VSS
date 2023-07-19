const occurenceCount = (input) => {
  const mapping = {};

  for (let i = 0; i < input.length; i++) {
    const Key = input[i].toLowerCase();
    // Key = input[i];

    if (mapping.hasOwnProperty(Key)) {
      mapping[Key] = mapping[Key] + 1;
    } else {
      mapping[Key] = 1;
    }
  }

  return mapping;
};

console.log(
  occurenceCount([
    "ankit",
    "chirag",
    "mitesh",
    "mahesh",
    "ankit",
    "sanket",
    "Sanket",
  ])
);
// Output -  {"ankit": 2, "chirag": 1, "mitesh": 1, "mahesh": 1, "sanket" : 2}
