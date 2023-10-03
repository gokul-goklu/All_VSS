let promise = new Promise((resolve, reject) => {
  let a = 3;
  if (a == 5)
    setTimeout(() => {
      resolve("iam done");
    }, 4000);
  else reject("Iam not done");
});

async function result() {
  try {
    let res = await promise;

    console.log(res);
    console.log("iam there");
  } catch (error) {
    console.log(error);
  }
}

result();
