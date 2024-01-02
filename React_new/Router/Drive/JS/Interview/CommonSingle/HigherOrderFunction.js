const higherOrder = (fn) => {
  fn();
};
higherOrder(() => {
  return console.log("helping higher order");
});
