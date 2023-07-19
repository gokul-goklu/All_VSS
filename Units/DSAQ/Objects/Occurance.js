const occurenceCount = (input) => {
  const mapping = {};

  for (let i = 0; i < input.length; i++) {
    const chiragKiKey = input[i];

    if (mapping.hasOwnProperty(chiragKiKey)) {
      mapping[chiragKiKey] = mapping[chiragKiKey] + 1; // 2 + 1
    } else {
      mapping[chiragKiKey] = 1;
    }
  }

  return mapping;
};

console.log(occurenceCount([1, 2, 3, 4, 1, 3, 4, 6, 1, 5]));
