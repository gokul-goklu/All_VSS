//Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
//Output: 6

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let count = 0;
let right = height.length - 1,
  left = 0;
let leftMax = height[left],
  rightMax = height[right];

while (left < right) {
  if (leftMax < rightMax) {
    left++;
    if (leftMax < height[left]) leftMax = height[left];
    else {
      count += leftMax - height[left];
    }
  } else {
    right--;
    if (rightMax < height[right]) {
      rightMax = height[right];
    } else {
      count += rightMax - height[right];
    }
  }
}
console.log(count);
