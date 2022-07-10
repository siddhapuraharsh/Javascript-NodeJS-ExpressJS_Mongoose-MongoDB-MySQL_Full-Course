function swapEnds(nums) {
  let temp = nums[0];
  nums[0] = nums[nums.length - 1];
  nums[nums.length - 1] = temp;
  return nums;
}

console.log(swapEnds([1, 2, 3, 4]));
console.log(swapEnds([1, 2, 3]));
console.log(swapEnds([8, 6, 7, 9, 5]));
console.log(swapEnds([3, 1, 4, 1, 5, 9]));
console.log(swapEnds([1, 2]));
console.log(swapEnds([1]));
