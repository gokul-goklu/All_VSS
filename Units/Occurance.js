const Occurance = (Input) => {
  let output;
  for (let i = 0; i < Input.length; i++) {
    output[Input[i]] = output[Input[i]] + 1;
  }
  console.log(output);
};

Input = ["jack", "And", "jack", "jill", "jack", "jill"];
Occurance(Input);
