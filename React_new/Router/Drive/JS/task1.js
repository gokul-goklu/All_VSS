const nums = [-1, 0, 1, 2, -1, -4];
const triples = [];
nums.sort((a, b) => a - b);
for (let i = 0; i < nums.length - 2; i++) {
  console.log(i);
  if (i == 0 || (i > 0 && nums[i] != nums[i - 1])) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] == 0) {
        triples.push([nums[i], nums[left], nums[right]]);
        while (nums[left] == nums[left + 1]) left++;
        while (nums[right] == nums[right]) right--;
        left++;
        right--;
      } else if (nums[i] + nums[left] + nums[right] < 0) left++;
      else if (nums[i] + nums[left] + nums[right] > 0) right--;
    }
  }
}
console.log(triples);
