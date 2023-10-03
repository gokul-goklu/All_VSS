ajax("/api", {
  success: (data) => {
    console.log(data);
  },
  error: (error) => {
    console.log(error);
  },
});

let promise = new Promise((resolve, reject) => {
  resolve(data);
  reject(error);
});

promise.then((data) => console.log(data)).catch((err) => console.log(err));
