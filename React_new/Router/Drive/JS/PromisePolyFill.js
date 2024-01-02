const handleCheck = (text, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
};

const myPromises = (p) => {
  let result = [];
  return new Promise((resolve, reject) => {
    p.forEach((item, i) => {
      item
        .then((res) => {
          result.push(res);
          if (p.length - 1 == i) resolve(result);
        })
        .catch((err) => reject(err));
    });
  });
};

myPromises([
  handleCheck("iam good", 2000),
  new Promise((resolve) => resolve("iam first")),
  //Promise.reject("bye"),
])
  .then((res) => console.log(res))
  .catch((re) => console.log(re));

// Promise.all([
//   handleCheck("iam good", 2000),
//   new Promise((resolve) => resolve("iam first")),
//   Promise.reject("bye"),
// ])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// const handleResulting = async () => {
//   try {
//     const result = await Promise.all([
//       handleCheck("iam done with the code", 1000),
//       new Promise((resolve) => resolve("iam second")),
//       Promise.reject("Iam third"),
//     ]);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// handleResulting();

//handleCheck("iam gokul's alterego", 2000).then((res) => console.log(res));
// const handleResult = async () => {
//   try {
//     const result = await handleCheck("iam gokul's alterego", 2000);
//     console.log(result);
//   } catch (err) {
//     console.error(err);
//   }
// };
// handleResult();
