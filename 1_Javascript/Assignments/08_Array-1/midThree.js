function midThree(nums) {
  let len = Math.floor(nums.length / 2);
  return [nums[len - 1], nums[len], nums[len + 1]];
}

console.log(midThree([1, 2, 3, 4, 5]));
console.log(midThree([8, 6, 7, 5, 3, 0, 9]));
console.log(midThree([1, 2, 3]));
